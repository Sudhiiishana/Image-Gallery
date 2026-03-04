import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import Gallery from "./Components/Gallery";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = async (term) => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${term}&per_page=30`,
        {
          headers: {
            Authorization:
              "cHrw62EsZwzguX5DlTdkObg2AuENCLOnYtC2nXVLe6i9iheFNHjPPGxO",
          },
        },
      );

      const formattedImages = response.data.photos.map((photo) => ({
        id: photo.id,
        url: photo.src.medium,
        download: photo.src.original,
      }));

      setImages(formattedImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="app">
      <h1>Image Gallery App</h1>
      <SearchBar onSearch={handleSearch} />
      <Gallery images={images} />
    </div>
  );
};

export default App;
