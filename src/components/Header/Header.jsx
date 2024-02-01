import React, { useEffect } from "react";
import logo from "../../assets/img/logo.png";
import { Badge } from "primereact/badge";
import "./Header.css";

function Header() {
  const cartValue = localStorage.getItem("cartItems");
  const cartItemsValue = cartValue ? JSON.parse(cartValue) : [];

  return (
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
              <a href="">
                <i className="bi bi-box-fill p-overlay-badge">
                  <Badge
                    value={cartItemsValue.length}
                    severity="danger"
                  ></Badge>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
