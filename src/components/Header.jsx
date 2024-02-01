import React from "react";
import logo from "../images/main-logo.png";
import banner from "../images/banner-image.png";

function Header() {
  return (
    <>
      <header
        id="header"
        className="site-header header-scrolled position-fixed text-black bg-light"
      >
        <div className="container">
          <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                <img src={logo} className="logo" />
              </a>
              <button
                className="navbar-toggler d-flex d-lg-none order-3 p-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#bdNavbar"
                aria-controls="bdNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg className="navbar-icon">
                  <use xlink:href="#navbar-icon"></use>
                </svg>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
                id="bdNavbar"
                aria-labelledby="bdNavbarOffcanvasLabel"
              >
                <div className="offcanvas-header px-4 pb-0">
                  <a className="navbar-brand" href="index.html">
                    <img src="" className="logo" />
                  </a>
                  <button
                    type="button"
                    className="btn-close btn-close-black"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    data-bs-target="#bdNavbar"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul
                    id="navbar"
                    className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3"
                  >
                    <li className="nav-item">
                      <a className="nav-link me-4 active" href="#billboard">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-4" href="#company-services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-4" href="#mobile-products">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-4" href="#smart-watches">
                        Watches
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-4" href="#yearly-sale">
                        Sale
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-4" href="#latest-blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link me-4 dropdown-toggle link-dark"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="about.html" className="dropdown-item">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="blog.html" className="dropdown-item">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="shop.html" className="dropdown-item">
                            Shop
                          </a>
                        </li>
                        <li>
                          <a href="cart.html" className="dropdown-item">
                            Cart
                          </a>
                        </li>
                        <li>
                          <a href="checkout.html" className="dropdown-item">
                            Checkout
                          </a>
                        </li>
                        <li>
                          <a href="single-post.html" className="dropdown-item">
                            Single Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="single-product.html"
                            className="dropdown-item"
                          >
                            Single Product
                          </a>
                        </li>
                        <li>
                          <a href="contact.html" className="dropdown-item">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <div className="user-items ps-5">
                        <ul className="d-flex justify-content-end list-unstyled">
                          <li className="search-item pe-3">
                            <a href="#" className="search-button">
                              <svg className="search">
                                <use xlink:href="#search"></use>
                              </svg>
                            </a>
                          </li>
                          <li className="pe-3">
                            <a href="#">
                              <svg className="user">
                                <use xlink:href="#user"></use>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="cart.html">
                              <svg className="cart">
                                <use xlink:href="#cart"></use>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center pt-5 mt-5">
              <div className="banner-content">
                <h1 className="display-2 text-uppercase text-dark pb-5">
                  Technology Hack You Won't Get
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
