import React, { useContext } from 'react'
import { GameContext } from '../Context/GameContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import GameDisplay from '../Components/GameDisplay/GameDisplay';

const Game = () => {
    const {all_games} = useContext(GameContext);
    const {gameId} = useParams();
    const game = all_games.find((e)=> e.id === Number(gameId));
  return (
    <div>
      <Breadcrum game={game}/>
      <GameDisplay game={game}/>
    </div>
    
  )
}

export default Game