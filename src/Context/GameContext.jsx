import React, { createContext, useEffect, useState } from "react";
import { getAllGames } from "../api/authApi"; // Import getAllGames from authApi.js

export const GameContext = createContext(null);

const GameContextProvider = (props) => {
    const [all_games, setAll_games] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await getAllGames(); // Call getAllGames function from authApi.js
                setAll_games(response.data); // Assuming response.data contains the array of games
            } catch (error) {
                alert(`Error fetching games: ${error.response?.data?.error || error.response?.data?.message || error.message}`);
            }
        };

        fetchGames();
    }, []);

    const formatLearningOutcomes = (text) => {
        if (!text) return null;
        const lines = text.split('\n');
        return lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ));
      };

    return (
        <GameContext.Provider value={{ all_games, formatLearningOutcomes }}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
