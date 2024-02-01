import React, { useState } from "react";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";
import "./ProductsList.css";
import "swiper/css";
import "swiper/css/pagination";
function ProductItem({ item }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="card">
        <div className="card-image pb-2">
          <img src="https://picsum.photos/400/400" alt="" />
          <img src="https://picsum.photos/400/401" alt="" />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-start align-items-start flex-column position-relative">
            <Rating value={2} disabled cancel={false} />
            <h5>
              <strong className="pe-1">{item.brand}</strong>
              {item.title}
            </h5>
            <div className="icon-area">
              <i className="bi bi-heart"></i>
              <i className="bi bi-cart-plus"></i>
            </div>
          </div>
          <strong className="price">{item.price}</strong>
          <button onClick={() => setVisible(true)} className="inspect">
            İncele
          </button>
        </div>
      </div>
      <Dialog
        header="Product Detail"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </>
  );
}

export default ProductItem;
