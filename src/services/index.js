'use-strict'
const { getWeather } = require('../api/weatherApi')
const errors = require('../errors/errors.json')

const checkIfTemperatureHigher = async (cityName, limitTemperature) => {
    try {
        const apiResult = await getWeather(cityName)
        return apiResult.main.temp > limitTemperature
    } catch (err) {
        const error = { ...errors.API_RESPONSE_ERROR, 'API ERROR': err }
        return error
    }
}

module.exports = { checkIfTemperatureHigher }
