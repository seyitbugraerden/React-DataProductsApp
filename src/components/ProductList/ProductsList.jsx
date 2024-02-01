import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./ProductsList.css";
import "swiper/css";
import "swiper/css/pagination";
import ProductItem from "./ProductItem";
import data from "../../data/data.json";

function ProductsList() {
  const [products, setProducts] = useState(data);
  return (
    <section className="container">
      <h2>Product List</h2>
      <Swiper slidesPerView={4} spaceBetween={30} className="mySwiper2">
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductsList;
