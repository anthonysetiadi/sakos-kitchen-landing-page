import React from "react";

function GalleryItem({ size, image }) {
  return (
    <div
      className={`gallery-card ${size}`}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}

export default GalleryItem;
