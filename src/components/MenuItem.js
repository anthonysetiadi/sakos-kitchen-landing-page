import React from "react";

function MenuItem({ modalOpen, image, name, price }) {
  return (
    <>
      <div onClick={modalOpen} className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> From ${price} AUD </p>
      </div>
    </>
  );
}

export default MenuItem;
