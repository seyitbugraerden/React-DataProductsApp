import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import iphones from "../../assets/img/iphones.png";
import laptop from "../../assets/img/laptop.png";
import ipad from "../../assets/img/ipad.png";
import "swiper/css/autoplay";
import "./MySwiper.css";
import "swiper/css/pagination";
import "swiper/css";
import "animate.css";

function MySwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      className="mySwiper"
      pagination={true}
      autoplay={{ delay: 5000 }}
      modules={[Autoplay, Pagination]}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
    >
      <SwiperSlide>
        <div className="container">
          <h1
            className={`animate__animated ${
              currentIndex === 0 ? "animate__fadeInLeft" : ""
            }`}
          >
            Sınırları Kaldırın, Teknolojiyle Yenilikleri Keşfedin.
          </h1>
          <img
            className={`animate__animated ${
              currentIndex === 0 ? "animate__fadeInRight" : ""
            }`}
            src={laptop}
            alt=""
          />
        </div>
        <img src="https://picsum.photos/1920/1080" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h1
            className={`animate__animated ${
              currentIndex === 1 ? "animate__fadeInLeft" : ""
            }`}
          >
            Geleceği Şekillendirin, Teknolojiyle Bir Adım Önde Olun.
          </h1>
          <img
            className={`animate__animated ${
              currentIndex === 1 ? "animate__fadeInRight" : ""
            }`}
            src={iphones}
            alt=""
          />
        </div>
        <img src="https://picsum.photos/1920/1081" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h1
            className={`animate__animated ${
              currentIndex === 2 ? "animate__fadeInLeft" : ""
            }`}
          >
            Teknoloji: Hayal Gücünüzü Gerçeğe Dönüştürmenin Anahtarı.
          </h1>
          <img
            className={`animate__animated ${
              currentIndex === 2 ? "animate__fadeInRight" : ""
            }`}
            src={ipad}
            alt=""
          />
        </div>
        <img src="https://picsum.photos/1920/1082" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;
