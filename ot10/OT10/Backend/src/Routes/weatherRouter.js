const express = require('express');

const weatherRouter = express.Router();

const WeatherController = require('../Controller/weatherController');

weatherRouter.get('/:cidade', WeatherController.buscar);

module.exports = weatherRouter;