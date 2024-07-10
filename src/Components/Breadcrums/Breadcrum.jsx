import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Breadcrum.css';
import arrow from '../Assets/arrow.png';

const Breadcrum = ({ game }) => {
    if (!game) {
        // Handle case where game is not available
        return null; // or render a loading state, placeholder, etc.
    }

    return (
        <div className='breadcrum'>
            <Link to="/games">GAMES</Link> 
            <img src={arrow} alt="arrow" />
            {game.category && (
                <Link to={`/games/${game.category}`}>{game.category}</Link>
            )}
            <img src={arrow} alt="arrow" />
            <span>{game.name}</span>
        </div>
    );
}

export default Breadcrum;
