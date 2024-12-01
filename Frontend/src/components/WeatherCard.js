import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WeatherApp.css';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weather }) => {

    // const weatherType = weatherDetails[0]?.main?.toLowerCase();
    const weatherIcons = {
        clear: '../assets/weather-icons/sunny.svg',
        clouds: '../assets/weather-icons/cloudy.svg',
        rain: '../assets/weather-icons/rainy.svg',
        snow: '../assets/weather-icons/snow.svg',
    };

    return (
        <motion.div
            className={`weather-card ${weather?.description}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="card-header">
                <h2>{weather?.city}</h2>
                <img src={weatherIcons.clear} alt={weather?.description} />
            </div>
            <div className="card-details">
                <p>Temperature: {weather?.temperature}°C</p>
                <p>Humidity: {weather?.humidity}%</p>
                <p>Wind Speed: {weather?.windSpeed} m/s</p>
                <p>Description: {weather?.description}</p>
            </div>
        </motion.div>
    );
};

export default WeatherCard;
