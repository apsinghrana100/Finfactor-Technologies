const weatherService = require('../services/weatherService');

const getWeather = async (req, res) => {
    const city = req.params.city;

    if (!city) {
        return res.status(400).json({ message: 'City name is required.' });
    }

    try {
        const weatherData = await weatherService.fetchWeather(city);
        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getWeather };
