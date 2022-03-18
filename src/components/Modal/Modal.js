import React from "react";
import "./Modal.css";

function Modal({ content, closeModal }) {
  const { name, image, price, description } = content;

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-closeBtn">
          <button onClick={closeModal}>&times;</button>
        </div>
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div
          className="modal-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="body">
          <p>{description}</p>
          <br></br>
          <p>From ${price} AUD</p>
        </div>
        <div className="footer">
          <button className="btn btn-back">Back</button>
          <button className="btn btn-next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
