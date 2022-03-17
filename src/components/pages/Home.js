import React, { useState } from "react";
import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import ImageGallery from "../ImageGallery/ImageGallery";
import Menu from "../pages/Menu";
import Modal from "../Modal/Modal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <HeroSection />
      <Menu />
      <ImageGallery />
      {modalOpen && <Modal modalOpen={open} handleClose={close} />}
    </>
  );
}

export default Home;
