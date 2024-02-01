import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import { Badge } from "primereact/badge";
import { Dialog } from "primereact/dialog";

import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);
  const cartValue = localStorage.getItem("cartItems");
  const cartItemsValue = cartValue ? JSON.parse(cartValue) : [];

  return (
    <>
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
        header="Header"
        visible={show}
        style={{ width: "50vw" }}
        onHide={() => setShow(false)}
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

export default Header;
