import React from 'react';
import GameList from './Gamelist2.jsx';
import './styles/App.css'
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

const App = () => {
    return (
        <>
            <header>
                <nav>
                    <Link className="navbar-brand" to="index.html">CoolGameShop</Link>
                    <Link className="text-menu" to="/catalog">Каталог</Link>
                    <Link className="text-menu" to="/about">О нас</Link>
                    <Link className="text-menu" to="/contact">Контакты</Link>
                    <Link className="btn-register" to="register.html">Зарегистрироваться</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/catalog" element={<GameList />} />
            </Routes>
            {/*<div className={"games"}>*/}
            {/*    <h1>   Список наших крутых игр</h1>*/}
            {/*    <GameList/>*/}
            {/*</div>*/}
        </>
    );
};

export default App;