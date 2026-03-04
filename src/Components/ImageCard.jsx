import React, { useState } from "react";

const ImageCard = ({ image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img src={image.url} alt={image.title} className="card-img" />

      <div className="card-actions">
        <button
          className={liked ? "liked btn" : "btn"}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <a href={image.url} download className="btn download">
          ⬇ Download
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
