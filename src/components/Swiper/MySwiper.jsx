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
        <img
          src="https://1.bp.blogspot.com/-8MHjCSMSut8/XZCnqWOWjCI/AAAAAAAAA_s/leDdkxTFXNok-2lqGZxLqpNtL6_A3bbzwCLcBGAsYHQ/s1600/PREDATOR%2B21%2BX%2B.jpg"
          alt=""
        />
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
        <img
          src="https://media.nu.nl/m/m1mxhmiaj1xo_wd1280/waarom-moeten-we-smartphones-nog-steeds-zo-vaak-opladen.jpg"
          alt=""
        />
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
        <img
          src="https://s3.amazonaws.com/cgcookie-rails/wp-uploads/2016/05/img_surface-pro.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;
