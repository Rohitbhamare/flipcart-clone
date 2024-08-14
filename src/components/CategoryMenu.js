// src/components/CategoryMenu.js
import React from "react";
import "./CategoryMenu.css";
import topOffersImg from "../assets/img/top offers.webp";
import mobileImg from "../assets/img/mobile.webp";
import tvImg from "../assets/img/tv.webp";
import electronicsImg from "../assets/img/electronics.webp";
import fashionImg from "../assets/img/fashion.webp";
import beautyImg from "../assets/img/beauty.webp";
import kitchenImg from "../assets/img/kitchen.webp";
import furnitureImg from "../assets/img/furniture.webp";
import travelImg from "../assets/img/travel.webp";
import groceryImg from "../assets/img/grocery.webp";

const CategoryMenu = () => {
  return (
    <nav>
      <ul className="category-menu">
        <li>
          <img src={topOffersImg} alt="Top Offers" />
          <span>Top Offer</span>
        </li>
        <li>
          <img src={mobileImg} alt="Mobiles & Tablets" />
          <span>Mobiles & Tablets</span>
        </li>
        <li>
          <img src={tvImg} alt="TVs & Appliances" />
          <span>TVs & Appliances</span>
        </li>
        <li>
          <img src={electronicsImg} alt="Electronics" />
          <span>Electronics</span>
        </li>
        <li>
          <img src={fashionImg} alt="Fashion" />
          <span>Fashion</span>
        </li>
        <li>
          <img src={beautyImg} alt="Beauty" />
          <span>Beauty</span>
        </li>
        <li>
          <img src={kitchenImg} alt="Home & Kitchen" />
          <span>Home & Kitchen</span>
        </li>
        <li>
          <img src={furnitureImg} alt="Furniture" />
          <span>Furniture</span>
        </li>
        <li>
          <img src={travelImg} alt="Travel" />
          <span>Travel</span>
        </li>
        <li>
          <img src={groceryImg} alt="Grocery" />
          <span>Grocery</span>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryMenu;
