'use-strict'
const { getWeather } = require('../api/weatherApi')
const errors = require('../errors/errors.json')

const checkIfTemperatureHigher = async (cityName, limitTemperature) => {
    if (isNaN(limitTemperature)) {
        return errors.TEMPERATURE_NAN
    }
    try {
        const apiResult = await getWeather(cityName)
        return apiResult.main.temp > limitTemperature
    } catch (err) {
        const error = { ...errors.API_RESPONSE_ERROR, 'API ERROR': err }
        return error
    }
}

module.exports = { checkIfTemperatureHigher }
