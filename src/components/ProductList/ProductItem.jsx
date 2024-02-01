import React, { useState } from "react";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";
import "./ProductsList.css";
import "swiper/css";
import "swiper/css/pagination";
function ProductItem({ item }) {
  const [visible, setVisible] = useState(false);
  const [imgSrc, setimgSrc] = useState(item.thumbnail);
  const [value, setValue] = useState(item.rating);
  return (
    <>
      <div className="card">
        <div className="card-image pb-2">
          <img src={item.thumbnail} alt="" />
          <img src={item.images[0]} alt="" />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-start align-items-start flex-column position-relative">
            <Rating value={value} disabled cancel={false} />
            <h5>
              <strong className="pe-1">{item.brand}</strong>
              {item.title}
            </h5>
            <div className="icon-area">
              <i className="bi bi-heart"></i>
              <i className="bi bi-cart-plus"></i>
            </div>
          </div>
          <strong className="price">{item.price}$</strong>
          <button onClick={() => setVisible(true)} className="inspect">
            İncele
          </button>
        </div>
      </div>
      <Dialog
        header="Ürün Detay"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="row">
          <div className="col-lg-5 overflow-hidden">
            <img src={imgSrc} alt="" width="100%" />
            <div className="img-cont">
              {item.images.map((element, index) => (
                <img
                  key={index}
                  src={element}
                  onClick={() => {
                    setimgSrc(element);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <h2>
              {item.brand} {item.title}
            </h2>
            <div className="text-muted py-2">Stock : {item.stock}</div>
            <div className="text-muted">{item.category}</div>
            <p className="pt-3">{item.description}</p>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ProductItem;
