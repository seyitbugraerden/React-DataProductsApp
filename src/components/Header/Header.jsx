import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav>
      <div className="container py-5 d-flex justify-content-between w-100 align-items-center">
        <div className="navbar-image">
          <img src="https://www.cers.com.tr/assets/img/cers-logo.svg" alt="" />
        </div>
        <div className="navbar-link">
          <ul className="d-flex flex-row gap-5">
            <li className="navbar-item">
              <a href="">Home</a>
            </li>
            <li className="navbar-item">
              <a href="">Order List</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
