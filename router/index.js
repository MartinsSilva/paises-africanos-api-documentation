const { Router } = require('express');
const controllerCountries = require('../controllers/controllerCountries');

const routers = Router();

routers.get('/countries', controllerCountries.getCountries);
routers.get('/countries/:id', controllerCountries.getOneCountry);

module.exports = routers;