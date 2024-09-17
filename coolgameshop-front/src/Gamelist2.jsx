import React, { useEffect, useState } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/games');  // Мой API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className={"data"}>
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