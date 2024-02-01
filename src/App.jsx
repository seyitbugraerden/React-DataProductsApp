import { useState } from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import Sec from "./components/Sec";
import Footer from "./components/Footer";
import ShopInsta from "./components/ShopInsta";
import "./App.css";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <Header />
      {/* {products.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))} */}
      <Sec />
      <ShopInsta />
      <Footer />
    </>
  );
}

export default App;
