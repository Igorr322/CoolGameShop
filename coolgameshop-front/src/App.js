import React from 'react';
import GameList from './pages/Gamelist2.jsx';
import './styles/App.css'
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Notfoundpage } from "./pages/Notfoundpage";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
    return (
        <>
            <header>
                <nav>
                    <Link className="navbar-brand" to="/">CoolGameShop</Link>
                    <Link className="text-menu" to="/catalog">Каталог</Link>
                    <Link className="text-menu" to="/about">О нас</Link>
                    <Link className="text-menu" to="/contact">Контакты</Link>
                    <Link className="btn-register" to="/register">Зарегистрироваться</Link>
                    <Link className="btn-enter" to="/login">Войти</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/catalog" element={<GameList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Notfoundpage />} />
            </Routes>
        </>
    );
};

export default App;