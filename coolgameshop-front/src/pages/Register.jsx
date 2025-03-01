import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register/', formData);
            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{padding: '110px'}}>
            <div style={{padding: '20px'}}>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div style={{padding: '20px'}}>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div style={{padding: '20px'}}>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Register</button>
            <p>Уже есть аккаунт? <a href="/login">Войдите здесь</a></p>
        </form>
    );
};

export default Register;