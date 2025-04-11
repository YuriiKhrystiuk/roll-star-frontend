import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { home_page } from "../../../assets/assets";
import "swiper/css";   
import "swiper/css/autoplay";                 
import "swiper/css/navigation";         
import "swiper/css/pagination";         
import "./RollstarSlider.css";

const images = [
    home_page.slider_img3,
    home_page.slider_img5,
    home_page.slider_img8,
    home_page.slider_img9,
    home_page.slider_img10,
    home_page.slider_img11,
    home_page.slider_img13,
    home_page.slider_img14,
    home_page.slider_img15,
    home_page.slider_one_more,
  ];


const RollstarSlider = () => {
    return (
        <div className='sliderWrapper'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
            className='swiperContainer'
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className='slide'>
                <img src={src} alt='' className='slide-image' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
};

export default RollstarSlider;