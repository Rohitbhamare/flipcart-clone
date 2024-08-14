// src/components/MainBanner.js
import React from "react";
import "./Carousel.css";
import banner1 from "../assets/img/banner.webp";
import banner2 from "../assets/img/banner2.webp";
import banner3 from "../assets/img/banner3.webp";

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="carousel">
        <div className="carousel-track">
          {/* <img src={banner1} alt="Banner 1" className="banner-image" />
          <img src={banner2} alt="Banner 2" className="banner-image" /> */}
          <img src={banner3} alt="Banner 3" className="banner-image" />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
