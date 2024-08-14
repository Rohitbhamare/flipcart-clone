// src/components/Header.js
import React from "react";
import "./Header.css";
import logo from "../assets/img/flipkart (1).svg";
import loginImg from "../assets/img/LOGIN.png";
import calendarImg from "../assets/img/CALENDAR.png";
import cartImg from "../assets/img/CART.png";

const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="Flipkart Logo" className="logo" />
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        className="search-bar"
      />
      <div className="header-icons">
        <a href="login.html" className="login-btn">
          <img src={loginImg} alt="Login" /> Login
        </a>
        <span>
          <img
            src={calendarImg}
            alt="Become a Seller"
            style={{ width: "27px" }}
          />{" "}
          Become a Seller
        </span>
        <span>
          <img src={cartImg} alt="Cart" style={{ width: "30px" }} /> Cart
        </span>
      </div>
    </header>
  );
};

export default Header;
