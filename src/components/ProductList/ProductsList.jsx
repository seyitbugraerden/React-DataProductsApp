import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dropdown } from "primereact/dropdown";
import "./ProductsList.css";
import "swiper/css";
import "swiper/css/pagination";
import ProductItem from "./ProductItem";
import data from "../../data/data.json";

function ProductsList() {
  const [products, setProducts] = useState(data);
  const [search, setsearch] = useState("Apple");
  const [brands, setbrands] = useState(["Apple", "Samsung"]);
  return (
    <section className="container">
      <h2>Product List</h2>
      <Dropdown
        value={setsearch("Samsung")}
        options={brands}
        optionLabel="name"
        placeholder="Select a City"
        className="w-full md:w-14rem"
      />
      <Swiper slidesPerView={4} spaceBetween={30} className="mySwiper2">
        {data.map((item, index) =>
          item.brand === search ? (
            <SwiperSlide key={index}>
              <ProductItem item={item} />
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <ProductItem item={item} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
}

export default ProductsList;
