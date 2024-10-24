import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Добро пожаловать на главную страницу!</h1>
      <p style={styles.text}>Здесь вы найдете интересное содержимое и обновления нашего магазина.</p>
      <button style={styles.button} onClick={() => alert('Добро пожаловать!')}>
        Узнать больше
      </button>
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
  },
};

export {Home};