import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 1. LIST YOUR PHOTOS HERE
const photos = [
  { src: "/gallery/rubyhairsalon_ - 1.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 2.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 3.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 4.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 5.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 6.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 7.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 8.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 9.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 10.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 11.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 12.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 13.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 14.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 15.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 16.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 17.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 18.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 19.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 21.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 22.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 23.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 24.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 25.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 26.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 27.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 28.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 29.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 30.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 31.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 32.jpg", width: 800, height: 600 },
  { src: "/gallery/rubyhairsalon_ - 33.jpg", width: 800, height: 600 },
  
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2>Our Work</h2>
        <div className="photo-grid">
          {photos.map((photo, i) => (
            <div key={i} className="thumbnail" onClick={() => setIndex(i)}>
              <img src={photo.src} alt="Examples of our hair styling work" style={{ width: "100%", display: "block" }} />
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
        />
      </div>
    </section>
  );
};

export default Gallery;