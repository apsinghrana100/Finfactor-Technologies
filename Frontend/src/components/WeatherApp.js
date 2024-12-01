import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import '../styles/WeatherApp.css';
import '../styles/WeatherCard.css';


const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            setError('');
            const response = await axios.get(
                `http://localhost:5000/api/weather/${city}`
            );
            setWeather(response.data);
            console.log(response.data)
        } catch (err) {
            setError('Could not fetch weather. Check the city name and try again.');
            setWeather(null);
        }
    };

    return (
        <div className="weather-app">
            <h1>Luxury Weather Search</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeather}>Search</button>
            </div>
            {error && <p className="error">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default WeatherApp;
