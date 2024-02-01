import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./MySwiper.css";
import "swiper/css/pagination";
import "swiper/css";

function MySwiper() {
  return (
    <Swiper
      className="mySwiper"
      loop={true}
      pagination={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;
