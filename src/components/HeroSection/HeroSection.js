import React from "react";
import { Button } from "../Button";
import "./HeroSection.css";
import "../../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Made with love</h1>
      <p>Handcrafted popcorn seasoned to perfection</p>
      <div className="hero-btns">
        <a href="https://sakoskitchen.myshopify.com/collections/all">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Order Now
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
