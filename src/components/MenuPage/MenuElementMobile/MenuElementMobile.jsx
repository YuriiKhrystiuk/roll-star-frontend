import React, { useState, useContext } from 'react';
import { assets } from "../../../assets/assets";
import { CartContext } from '../../OpenCart/CartContext';
import "./MenuElementMobile.css";

const MenuElement = ({ item }) => {
  const [itemCount, setItemCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increaseItemCount = () => {
    setItemCount(prev => prev + 1);
  };

  const decreaseItemCount = () => {
    if (itemCount > 0) {
      setItemCount(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (itemCount > 0) {
      addToCart({ ...item, quantity: itemCount });
      setItemCount(0);
    }
  };

  return (
    <div>
        <div className='card'>

            <div class="first_menu_element_mobile">
                <div className='first_menu_element_mobile'>
                    <img className='first_img' src={item.image} alt={item.title} />
                </div>

                <div className='numbers_mobile'>
                    <div className='add_or_not'>
                        <img onClick={decreaseItemCount} src={assets.minus} alt="minus" className='minus'/>
                        <div className="quantity">
                            <h3 className='quantity'>{itemCount}</h3>
                        </div>
                        <img onClick={increaseItemCount} src={assets.plus} alt="plus" className='plus'/>
                    </div>

                    <div className='numbers_menu_element_mobile'>
                        <h3 className="numbers_menu_element_mobile_weight">{item.weight} гр.</h3>
        
                        <h3 className="numbers_menu_element_mobile_price">{item.price} ₴</h3>
                    </div>
                </div>

            </div>

            <div className='second_menu_element_mobile'>
                <div className='second_menu_element_mobile_text'>
                    <div>
                        <h1 className="second_menu_element_mobile_text_title">{item.title}</h1>
                    </div>
                
                    <div className="description_container">
                        <p className="description">{item.description}</p>
                    </div>
                </div>

                <div>
                    <button className='to_cart' onClick={handleAddToCart}><h3>У кошик</h3></button>
                </div>

            </div>
            
        </div>

    
    </div>
  );
};

export default MenuElement;
