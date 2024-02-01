import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./ProductsList.css";
import "swiper/css";
import "swiper/css/pagination";

function ProductsList() {
  return (
    <section className="container">
      <h2>Product List</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="card">
            <img src="https://picsum.photos/400/400" alt="" />
            <h4>İphone</h4>
            <div className="text-muted">Apple</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ProductsList;
