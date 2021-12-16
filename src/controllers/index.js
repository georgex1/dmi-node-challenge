const HttpStatus = require('http-status-codes')
const configs = require('../configs/configs.json')
const { checkIfTemperatureHigher } = require('../services/')

const getTemperatureInfo = async (request, reply) => {
    const cityName = request.body.cityName || configs.DEFAULT_CITY
    const limitTemperature = request.body.limitTemperature || configs.DEFAULT_LIMIT_TEMPERATURE

    const response = await checkIfTemperatureHigher(cityName, limitTemperature)

    if (response?.error) {
        reply.code(HttpStatus.StatusCodes.UNPROCESSABLE_ENTITY).send(response)
    } else {
        const responsePayload = {
            compare_temp_location: cityName,
            compare_temp_value: limitTemperature,
            actual_temp_is_higher: response
        }
        reply.send(responsePayload)
    }
}

module.exports = { getTemperatureInfo }
