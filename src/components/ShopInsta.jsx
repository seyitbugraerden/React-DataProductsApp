import React, { useState } from "react";
import data from "../data/data.json";

function ShopInsta() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <section
        id="instagram"
        className="padding-large overflow-hidden no-padding-top"
      >
        <div className="container">
          <div className="row">
            <div className="display-header text-uppercase text-dark text-center pb-3">
              <h2 className="display-7">Shop Our Insta</h2>
            </div>
            <div className="d-flex flex-wrap">
              {products.slice(0, 5).map((item, index) => (
                <figure key={index} className="instagram-item pe-2">
                  <a
                    href="https://templatesjungle.com/"
                    className="image-link position-relative"
                  >
                    <img
                      src={item.thumbnail}
                      alt="instagram"
                      className="insta-image"
                    />
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        <use xlink:href="#instagram"></use>
                      </svg>
                    </div>
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopInsta;
