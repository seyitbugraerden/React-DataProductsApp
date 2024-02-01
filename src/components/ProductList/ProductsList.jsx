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
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression of Acqua Di Gio",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "Fauji",
    "Dry Rose",
    "Boho Decor",
    "Flying Wooden",
    "LED Lights",
    "Luxury Palace",
    "Golden",
  ]);

  useEffect(() => {
    if (search !== "") {
      const filteredProducts = data.filter((item) => item.brand === search);
      setProducts(filteredProducts);
    }
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
