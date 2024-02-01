import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import HeaderCard from "./HeaderCard";
import { Badge } from "primereact/badge";
import { Dialog } from "primereact/dialog";

import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);
  const cartValue = localStorage.getItem("cartItems");
  const cartItemsValue = cartValue ? JSON.parse(cartValue) : [];

  return (
    <header>
      <nav>
        <div className="container py-2 d-flex justify-content-between w-100 align-items-center">
          <div className="navbar-image">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-link">
            <ul className="d-flex flex-row gap-5">
              <li className="navbar-item pt-1">
                <a href="">Ana Sayfa</a>
              </li>
              <li className="navbar-item">
                <i
                  className="bi bi-box-fill p-overlay-badge"
                  onClick={() => setShow(true)}
                >
                  <Badge
                    value={cartItemsValue.length}
                    severity="danger"
                  ></Badge>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Dialog
        header="Sepet"
        visible={show}
        style={{ width: "50vw" }}
        onHide={() => setShow(false)}
      >
        <HeaderCard />
      </Dialog>
    </header>
  );
}

export default Header;
