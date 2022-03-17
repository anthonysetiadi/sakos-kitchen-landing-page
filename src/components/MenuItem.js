import React, { useState } from "react";
import Modal from "./Modal/Modal";

function MenuItem({ props, image, name, price }) {
  return (
    <>
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> From ${price} AUD </p>
      </div>
    </>
  );
}

export default MenuItem;
