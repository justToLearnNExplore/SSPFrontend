import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Games.css'; // Import your CSS file

const Games = () => {
  return (
      <div className="games-container">
      <h1>Games</h1>
      <div className="categories">
        <Link to="/games/card" className="category-card">
          <div className="category-content">
            <h2>Cards</h2>
            <p>Explore our collection of card games</p>
          </div>
        </Link>
        <Link to="/games/board" className="category-card">
          <div className="category-content">
            <h2>Boards</h2>
            <p>Discover our exciting board games</p>
          </div>
        </Link>
        <Link to="/games/memory" className="category-card">
          <div className="category-content">
            <h2>Memory</h2>
            <p>Test your memory with our memory games</p>
          </div>
        </Link>
        <Link to="/games/puzzle" className="category-card">
          <div className="category-content">
            <h2>Puzzles</h2>
            <p>Challenge yourself with our puzzle games</p>
          </div>
        </Link>
        <Link to="/games/hks" className="category-card">
          <div className="category-content">
            <h2>HKS</h2>
            <p>Games based on Harikathaamrutasaara</p>
          </div>
        </Link>
        <Link to="/games/bgt" className="category-card">
          <div className="category-content">
            <h2>Bhagavata Kit</h2>
            <p>Games based on Bhagavata</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Games;
