import React from "react";

const Game = (props) => {
    return (
        <div className="game">
            <strong>{props.game.id}. Игра: {props.game.game}</strong>
            <p>Нужна интересная игра</p>
        </div>
    );
};

export default Game;