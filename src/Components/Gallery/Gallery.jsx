import React, { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1035/600/400",
  ];

  return (
    <div className="gallery">
      <h1>Image Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img
              src={img}
              alt="gallery"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="modal-img" alt="large" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
