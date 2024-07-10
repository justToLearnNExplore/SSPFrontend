import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import './CSS/GameCategory.css';
import { GameContext } from "../Context/GameContext";
import Item from "../Components/Item/Item";

const GameCategory = (props) => {
    const { all_games } = useContext(GameContext);

    return (
        <div className="game-category">
            <div className="game-banner">
                <h1>{props.category}</h1>
            </div>
            <div className="games">
                {all_games.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <NavLink key={i} to={`/game/${item.id}`} className="game-link">
                                <Item 
                                    id={item.id} 
                                    name={item.name} 
                                    category={item.category} 
                                    image={item.image} 
                                    price={item.price} 
                                />
                            </NavLink>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="back">
                <Link to="/games">
                    <i className="fa-solid fa-circle-chevron-left fa-lg"></i>
                </Link>
            </div>
        </div>
    );
}

export default GameCategory;


