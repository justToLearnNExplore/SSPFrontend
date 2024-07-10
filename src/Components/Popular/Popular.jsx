import React from "react";
import './Popular.css'
import pop_games from '../Assets/pop_games'
import Item from '../Item/Item'

const Popular = () => {
    return(
        <div className="popular">
          <h1>Popular Games</h1>
          <hr />
          <div className="popular-item">
            {pop_games.map((item,i)=>{
               return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} price={item.price} />
            })}
          </div>
        </div>
    )
}

export default Popular