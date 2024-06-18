import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../../App.css';

// import required modules
import { Pagination } from 'swiper/modules';



import { slide } from '../../Utlis/InterfaceObj';
import HeroImgRightWihCont from '../Hero/HeroImgRightWihCont'; // Adjust the import path if necessary

const HeroSwiper = () => {
  return (
    <Swiper
    spaceBetween={30}
    pagination={{
        clickable: true,
      }}
        modules={[Pagination]}
        className="mySwiper"
    >
      {slide.map((item, index) => (
        <SwiperSlide key={index}>
          <HeroImgRightWihCont slideData={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
