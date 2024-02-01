import React, { useState } from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./ProductsList.css";
import "swiper/css";
import "swiper/css/pagination";
import ProductItem from "./ProductItem";
import data from "../../data/data.json";

function ProductsList() {
  const [data, setData] = useState(data);
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
        {data.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </Swiper>
    </section>
  );
}

export default ProductsList;
