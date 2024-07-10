import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, heading }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="image-slider-container">
      <div className="heading-container">
        <h2 className="slider-heading">{`${heading} ${images[currentImageIndex].name}`}</h2>
        <hr className="separator" />
      </div>
      <div className="image-slider">
        <button className="slider-arrow left-arrow" onClick={prevImage}>
          &lt;
        </button>
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].name}
          className="slider-image"
          loading="lazy" // Lazy load attribute
        />
        <button className="slider-arrow right-arrow" onClick={nextImage}>
          &gt;
        </button>
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`slider-dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
