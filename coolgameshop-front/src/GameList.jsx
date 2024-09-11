import React from "react";
import Game from "./Game";

const GameList = ({games}) => {
    // if (!games.length) {
    //     return <h1>Игры не найдены</h1>
    // }
    return (
        <div>
            {games.map(game => <Game game={game} key={game.id}/>)}
        </div>
    );
};

export default GameList;