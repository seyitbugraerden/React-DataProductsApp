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
  const [search, setSearch] = useState("Apple");
  const [brands, setBrands] = useState(["Apple", "Samsung"]);

  useEffect(() => {
    // Filter products based on selected brand
    const filteredProducts = data.filter((item) => item.brand === search);
    setProducts(filteredProducts);
  }, [search]);

  return (
    <section className="container">
      <h2>Product List</h2>
      <Dropdown
        value={search}
        options={brands}
        onChange={(e) => setSearch(e.value)}
        placeholder="Select a Brand"
        className="w-full md:w-14rem"
      />
      <Swiper slidesPerView={4} spaceBetween={30} className="mySwiper2">
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductsList;
