import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuElement from './MenuElement/MenuElement';
import { menu_items_list } from "../../assets/assets";
import "./MenuPage.css";
import MenuNav, { categories } from './MenuNav/MenuNav';
import MenuElementMobile from './MenuElementMobile/MenuElementMobile';

const MenuPage = () => {
  const {category: initialCategory} = useParams();
  const [category, setGlobalCategory] = useState(initialCategory || 'pizza');
  const [orderedItems, setOrderedItems] = useState([]);

  const addToCart = (item, quantity) => {
    setOrderedItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(orderedItem => orderedItem.id === item.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      }
      return [...prevItems, { ...item, quantity }];
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    setGlobalCategory(initialCategory || 'pizza');
  }, [initialCategory]);

  const filteredMenuItems = category === "" ? menu_items_list : menu_items_list.filter(item => item.type === category);

  return (
    <div className='menupage' id='menu'>

      <h1 className='food_name'>
      {categories.find((cat) => cat.id === category)?.label.replace(/<br\s*\/?>/g, ' ')}
      </h1>

      <MenuNav category={category} setGlobalCategory={setGlobalCategory} />
      <div className="menupage-container">
        {filteredMenuItems.map((item) => (
          <MenuElement 
            key={item.id} 
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className="menupage_container_mobile">
        {filteredMenuItems.map((item) => (
          <MenuElementMobile
            key={item.id} 
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>

        <br />
    </div>
  );
}

export default MenuPage;
