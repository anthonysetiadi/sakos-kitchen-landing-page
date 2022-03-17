import React, { useState } from "react";
import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import ImageGallery from "../ImageGallery/ImageGallery";
import Menu from "../pages/Menu";

function Home() {
  return (
    <>
      <HeroSection />
      <Menu />
      <ImageGallery />
    </>
  );
}

export default Home;
