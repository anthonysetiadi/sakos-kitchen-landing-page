import React from "react";
import { GalleryList } from "../../helpers/Gallerylist";
import GalleryItem from "../GalleryItem";
import "./ImageGallery.css";

function ImageGallery() {
  return (
    <div className="gallery">
      <h1 className="gallery-title">Image Gallery</h1>
      <div className="gallery-grid">
        {GalleryList.map((galleryItem, key) => {
          return (
            <GalleryItem
              key={key}
              image={galleryItem.image}
              size={galleryItem.size}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
