import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import iphones from "../../assets/img/iphones.png";
import "swiper/css/autoplay";
import "./MySwiper.css";
import "swiper/css/pagination";
import "swiper/css";
import "animate.css";

function MySwiper() {
  return (
    <Swiper
      className="mySwiper"
      loop={true}
      pagination={true}
      autoplay={{ delay: 5000 }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div className="container">
          <h1 className="animate__animated animate__fadeInLeft">
            Sınırları Kaldırın, Teknolojiyle Yenilikleri Keşfedin.
          </h1>
        </div>
        <img src="https://picsum.photos/1920/1080" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h1 className="animate__animated animate__fadeInLeft">
            Geleceği Şekillendirin, Teknolojiyle Bir Adım Önde Olun.
          </h1>
          <img
            className="animate__animated animate__fadeInRight"
            src={iphones}
            alt=""
          />
        </div>
        <img src="https://picsum.photos/1920/1081" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h1 className="animate__animated animate__fadeInLeft">
            Teknoloji: Hayal Gücünüzü Gerçeğe Dönüştürmenin Anahtarı.
          </h1>
        </div>
        <img src="https://picsum.photos/1920/1082" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;
