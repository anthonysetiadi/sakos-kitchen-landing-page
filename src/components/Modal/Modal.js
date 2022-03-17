import React from "react";
import "./Modal.css";

function Modal({ closeModal, price, image, name }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-closeBtn">
          <button onClick={closeModal}>&times;</button>
        </div>
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="body">{price}</div>
        <div className="footer">
          <button className="btn btn-back">Back</button>
          <button className="btn btn-next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
