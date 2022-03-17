import React from "react";
import "./Modal.css";

function Modal({ handleClose, text }) {
  return (
    <div className="modal-background">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="title-closeBtn">
          <button onClick={handleClose}>&times;</button>
        </div>
        <div className="title">
          <h1>Hello</h1>
        </div>
        <div className="body"></div>
        <div className="footer">
          <button className="btn btn-back">Back</button>
          <button className="btn btn-next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
