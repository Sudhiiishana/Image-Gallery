import React, { useState } from "react";

const ImageCard = ({ image }) => {
  const [liked, setLiked] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Fetch image as blob to avoid browser opening it
    fetch(image.url)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = image.title || "image";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloaded(true); // Update button text
      })
      .catch((err) => console.error("Download failed:", err));
  };

  return (
    <div className="card">
      <img src={image.url} alt={image.title} className="card-img" />

      <div className="card-actions">
        <button onClick={handleDownload} className="btn download">
          {downloaded ? "✅ Downloaded" : "⬇ Download"}
        </button>

        <a
          href={image.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn view"
        >
          👁 View
        </a>

        <a
          href={`https://wa.me/?text=${image.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn share"
        >
          🔗 Share
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
