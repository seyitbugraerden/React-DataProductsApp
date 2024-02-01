import React from "react";
import Header from "./components/Header/Header";
import Swiper from "./components/Swiper/MySwiper";
import ProductsList from "./components/ProductList/ProductsList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Swiper />
      <main>
        <ProductsList />
      </main>
    </>
  );
}

export default App;
