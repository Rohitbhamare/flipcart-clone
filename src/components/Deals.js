// src/components/Deals.js
import React from "react";
import "./Deals.css";
import mobileOffer from "../assets/img/mobile-offer.jpg";

const Deals = () => {
  return (
    <section className="deals">
      <h2>Deals On Smartphones</h2>
      <div className="product-list">
        <div className="product">
          <img src={mobileOffer} alt="Realme P1 5G" />
          <p>
            Realme P1 5G
            <br />
            Just ₹14,499
          </p>
        </div>
        <div className="product">
          <img src={mobileOffer} alt="Realme 12x 5G" />
          <p>
            realme 12x 5G
            <br />
            Just ₹11,999
          </p>
        </div>
        <div className="product">
          <img src={mobileOffer} alt="Realme P1 Pro 5G" />
          <p>
            Realme P1 Pro 5G
            <br />
            Just ₹16,999
          </p>
        </div>
        <div className="product">
          <img src={mobileOffer} alt="Vivo T2x 5G" />
          <p>
            Vivo T2x 5G
            <br />
            From ₹10,999
          </p>
        </div>
        <div className="product">
          <img src={mobileOffer} alt="Realme P1 5G" />
          <p>
            realme P1 5G (6/128GB)
            <br />
            Just ₹15,999
          </p>
        </div>
      </div>
    </section>
  );
};

export default Deals;
