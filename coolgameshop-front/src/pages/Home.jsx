import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Добро пожаловать в лучший магазин видеоигр CoolGameShop!</h1>
            <p style={styles.text}>Здесь вы найдете множество интерестных игр и обновления нашего магазина.</p>
            <p style={styles.text}>Каждый найдёт для себя что-то интересное.</p>
            <a href={"/catalog"} style={styles.button}>Перейти в каталог</a>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: '2rem',
        color: '#333',
    },
    text: {
        fontSize: '1.2rem',
        color: '#666',
        textAlign: 'center',
        margin: '0 20px',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        text: 'none',
        textDecoration: 'none',
    },
};

export {Home};