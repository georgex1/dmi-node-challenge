'use-strict'
const {getTemperatureInfo} = require('../controllers')
const configs = require('../configs/configs.json')

module.exports = function (fastify, opts, done) {
    fastify.get('/check_temperature', async (request, reply) => {
        const cityName = configs.DEFAULT_CITY;
        
        const result = await getTemperatureInfo(cityName);
        return result
    });

    fastify.get('/check_temperature/:cityName', async (request, reply) => {
        const cityName = request.params.cityName || configs.DEFAULT_CITY;
        
        const result = await getTemperatureInfo(cityName);
        return result
    });

    fastify.get('/check_temperature/:cityName/:limitTemperature', async (request, reply) => {
        const cityName = request.params.cityName || configs.DEFAULT_CITY;
        const limitTemperature = request.params.limitTemperature || configs.DEFAULT_LIMIT_TEMPERATURE;
        
        const result = await getTemperatureInfo(cityName, limitTemperature);
        return result
    });

    done();
}
