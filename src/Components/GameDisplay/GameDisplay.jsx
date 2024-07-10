import React, { useState, useContext, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './GameDisplay.css';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate
import { GameContext } from '../../Context/GameContext';

const GameDisplay = ({ game }) => {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (game) {
      setImages(game.images || []);
      setMainImage(game.image || '');
    }
  }, [game]);

  const { formatLearningOutcomes } = useContext(GameContext);

  const handleImageClick = (clickedImage) => {
    if (clickedImage !== mainImage) {
      setImages((prevImages) =>
        prevImages.map((image) => (image === clickedImage ? mainImage : image))
      );
      setMainImage(clickedImage);
    }
  };

  const renderLearningOutcomes = () => {
    if (!game || !game.lo) return null;
    return formatLearningOutcomes(game.lo);
  };

  const navigate = useNavigate();

  return (
    <div className="gamedisplay-page">
      <div className="gamedisplay">
        <div className="gamedisplay-left">
          <div className="main-img">
            <LazyLoadImage
              src={mainImage}
              alt="Main Image"
              effect="blur"
              onClick={() => handleImageClick(mainImage)}
              className="main-image"
            />
          </div>
          <div className="img-list">
            {images.map((image, index) => (
              <LazyLoadImage
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                effect="blur"
                onClick={() => handleImageClick(image)}
                className="lazy-image"
              />
            ))}
          </div>
        </div>
        <div className="gamedisplay-right">
          <h1>{game ? game.name : 'Loading...'}</h1>
          <div className="price">
            <span className="price-title">Price: </span>
            <span>{game ? game.price : '-'}</span>
          </div>
          <div className="players">
            <span className="players-title">No. of Players: </span>
            <span>{game ? game.players : '-'}</span>
          </div>
          <div className="age">
            <span className="age-title">Age: </span>
            <span>{game ? `${game.age} years+` : '-'}</span>
          </div>
          <div className="learning-outcomes">
            <span className="learning-outcomes-title">Learning Outcomes: </span>
            {renderLearningOutcomes()}
          </div>
          <div className="demo-link">
            <a href={game ? game.youtubeLink : '#'} target="_blank" rel="noopener noreferrer">
              Demo Video
            </a>
            <p className="demo-link-p">*Clicking here will redirect you to our YouTube Channel</p>
          </div>
          <button
            onClick={() => navigate(`/game/${game.id}/enquiry`, { state: { game } })}
          >
            Raise Enquiry
          </button>
        </div>
      </div>
      <div className="gamedisplay-page">
        <footer>
          <p>&copy; 2024 SSP. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default GameDisplay;
