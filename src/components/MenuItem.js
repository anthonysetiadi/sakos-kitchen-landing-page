import React from "react";

function MenuItem({ openModal, image, name, price }) {
  return (
    <>
      <div onClick={openModal} className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> From ${price} AUD </p>
      </div>
    </>
  );
}

export default MenuItem;
