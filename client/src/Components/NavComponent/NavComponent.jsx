import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Nav() {
  const num = useSelector((state) => state.favs.data.length);
  const scrollDown = () => {
    window.scrollBy({
      top: 650,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="header">
        <div className="overlay">
          <div className="container">
            <header className="content d-flex align-items-center justify-content-between py-3 mb-4">
              <ul className="nav nav-header col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a
                    onClick={scrollDown}
                    href="#"
                    className="header-link header-link_news nav-link px-2"
                  >
                    New collection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="header-link header-link_clothing nav-link px-2"
                  >
                    Dresses
                  </a>
                </li>
                <li>
                  <Link to="/contacts">
                    <a
                      href="#"
                      className="header-link header-link_clothing nav-link px-2"
                    >
                      Contacts
                    </a>
                  </Link>
                </li>
              </ul>

              <a
                className="btn burger"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <div className="burger-one"></div>
                <div className="burger-two"></div>
                <div className="burger-three"></div>
              </a>

              <div className="col-md-2 mb-2 mb-md-0 d-flex justify-content-center">
                <Link
                  to="/"
                  className="loopa d-inline-flex link-body-emphasis text-decoration-none"
                >
                  <img id="logo" src="./../img/icons/logo.png" alt="Logo" />
                </Link>
              </div>

              <div className="search-header col-md-3 mb-2 mb-md-0 d-flex justify-content-center">
                <img src="./../img/icons/look.svg" alt="Search Icon" />
                <input type="text" id="Search" placeholder="Поиск" />
              </div>

              <div className="col-md-3 text-end">
                <ul className="header-items_imgs d-flex align-items-center justify-content-center">
                  <li className="rel">
                    <Link to="/favs" className="nav-link px-2 link-secondary">
                      <div className="likeButton">
                        <div>{num}</div>
                        <img
                          className="header-item_img"
                          src="./../img/icons/likeBlack.svg"
                          alt="Like"
                        />
                      </div>
                    </Link>
                  </li>
                  <li className="rel">
                    <a href="#" className="nav-link px-2 link-secondary">
                      <img
                        className="header-item_img"
                        src="./../img/icons/shoppingBag.svg"
                        alt="Shopping Bag"
                      />
                    </a>
                    <div id="bagSircle"></div>
                  </li>
                  <li
                    className="rel"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                  >
                    <a href="#" className="nav-link px-2 link-secondary">
                      <img
                        className="header-item_img"
                        src="./../img/icons/account.svg"
                        alt="Account"
                      />
                    </a>
                    <div id="accountSircle"></div>
                  </li>
                </ul>
              </div>
            </header>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a
                  onClick={scrollDown}
                  href="#"
                  className="header-link header-link_news nav-link px-2"
                >
                  New Collection
                </a>
              </li>
              <li>
                <Link to="/contacts">
                  <a
                    href="#"
                    className="header-link header-link_clothing nav-link px-2"
                  >
                    Contacts
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-top h-100"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="login">
              <h3 className="reg-title">Log In</h3>
              <div className="reg-name">
                <h6 className="reg-name_name">Name or Email Address *</h6>
                <input type="text" id="login-name" />
              </div>
              <div className="reg-email">
                <h6 className="reg-name_name">Password *</h6>
                <input type="password" id="login-password" />
              </div>
              <div className="checkbox-login">
                <input type="checkbox" id="checkboxIns" />
                <label className="rememberMe" htmlFor="checkboxIns">
                  Remember Me
                </label>
              </div>
              <input
                type="button"
                value="Log In"
                id="view-add"
                className="btn btn-primary mt-3"
              />
              <div className="details">
                <a id="regText">Register</a> /{" "}
                <a id="forgotPasText">Forgot Password?</a>
              </div>
            </div>

            <div className="register">
              <h3 className="reg-title">Registration Form</h3>
              <div className="reg-name">
                <h6 className="reg-name_name">Name *</h6>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="reg-email">
                <h6 className="reg-name_name">Email Address *</h6>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="reg-pass">
                <h6 className="reg-name_name">Password *</h6>
                <input type="password" placeholder="Enter your password" />
              </div>
              <input
                type="button"
                value="Sign Up"
                className="btn btn-primary mt-3"
              />
            </div>

            <div className="forgotPassword">
              <p>
                Forgot your password? Please provide your Email or username. You
                will receive a link to create a new password via email.
              </p>
              <input type="text" placeholder="Username or Email" />
              <input
                type="button"
                value="Reset Password"
                className="btn btn-primary mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
