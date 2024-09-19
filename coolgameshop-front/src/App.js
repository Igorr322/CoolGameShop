import React from 'react';
import GameList from './Gamelist2.jsx';
import Register from './components/Register.js';

const App = () => {
  return (
    <div className="App">
            <h1>Register</h1>
            <Register />
    </div>,
    <div>
      <GameList />
    </div>
  );
};

export default App;