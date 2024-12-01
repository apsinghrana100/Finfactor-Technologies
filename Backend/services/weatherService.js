const axios = require('axios');
const cache = require('../utils/cache');

const fetchWeather = async (city) => {
    // Check cache for data
    const cachedData = cache.get(city);
    if (cachedData) {
        console.log(`Cache hit for city: ${city}`);
        return cachedData;
    }

    console.log(`Cache miss for city: ${city}`);
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        // Transform the API response into structured weather data
        const weatherData = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        };

        // Store data in the cache
        cache.set(city, weatherData);

        return weatherData;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error(`City "${city}" not found.`);
        } else {
            throw new Error('Unable to fetch weather data. Please try again later.');
        }
    }
};

module.exports = { fetchWeather };
