import React from "react";
import ImageCard from "./ImageCard";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
};

export default Gallery;
