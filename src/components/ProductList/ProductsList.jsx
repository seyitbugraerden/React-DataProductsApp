import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Rating } from "primereact/rating";
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
            <div className="card-image pb-2">
              <img src="https://picsum.photos/400/400" alt="" />
              <img src="https://picsum.photos/400/401" alt="" />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-start align-items-start flex-column">
                <Rating value={2} disabled cancel={false} />
                <h4>İphone</h4>
                <div className="text-muted">Apple</div>
                <div className="icon-area"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ProductsList;
