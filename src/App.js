// src/App.js
import React from "react";
import Header from "./components/Header";
import CategoryMenu from "./components/CategoryMenu";
import MainBanner from "./components/MainBanner";
import Deals from "./components/Deals";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryMenu />
      <MainBanner />
      <Deals />
    </div>
  );
}

export default App;
