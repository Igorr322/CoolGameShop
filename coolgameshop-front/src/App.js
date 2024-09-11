import logo from './logo.svg';
import './App.css';
import GameList from "./GameList";
import axios from 'axios';
import {useState} from "react";
import DataFetchingComponent from './DataFetchingComponent';

const API_URL = 'http://127.0.0.1:8000/api/games'

function App() {
    const [games, setGames] = useState([])

    async function getGames() {
        const response = await axios.get(API_URL)
        setGames(response.data)
    }

    return (
        <div className="App">
            <button onClick={getGames}>Обновить игры</button>
            <div>
                <h1>Мое приложение</h1>
                {/*<DataFetchingComponent/>*/}
            </div>
            <h1>Список игр</h1>
            {/*<GameList games={games}></GameList>*/}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
