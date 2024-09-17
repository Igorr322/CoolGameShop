import React from "react";
import Game from "./Game";

const GameList = ({games}) => {
    // if (!games.length) {
    //     return <h1>Игры не найдены</h1>
    // }
    return (
    <div>
      <h1>Список наших крутых игр</h1>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <h2>{game.name}</h2>
            <img src={game.link_img} alt={game.name} />
            <p>{game.description}</p>
            <p>Цена: {game.price} ₽</p>
            <a href={game.link} target="_blank" rel="noopener noreferrer">Ссылка на игру</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;