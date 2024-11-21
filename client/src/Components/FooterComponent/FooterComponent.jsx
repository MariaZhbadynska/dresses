import React from "react";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div>
      <footer>
        <div className="row container">
          <div className="footer-logo col-3">
            <img id="logo" src="/img/icons/logo.png" alt="Logo" />
          </div>
          <div className="footer-text">
            <div className="footer-help col-3">
              <ul>
                <li>
                  <h6>
                    <a href="#">Help</a>
                  </h6>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Returns & Exchanges</a>
                </li>
              </ul>
            </div>
            <div className="footer-company col-3">
              <ul>
                <li>
                  <h6>
                    <a href="#">Company</a>
                  </h6>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Stores</a>
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
            <div className="footer-information col-3">
              <ul>
                <li>
                  <h6>
                    <a href="#">Information</a>
                  </h6>
                </li>
                <li>
                  <a href="#">Public Offer</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom">
        <p>
          All rights reserved. User Agreement. Privacy Policy © 2022
          sarafancollection.ru
        </p>
      </div>
    </div>
  );
}
