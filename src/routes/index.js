'use-strict'
const {getTemperatureInfo} = require('../controllers')

module.exports = function (fastify, opts, done) {
    fastify.get('/check_temperature', async (request, reply) => {
        const cityName = 'Rio Cuarto, Argentina';
        
        const result = await getTemperatureInfo(cityName);
        return result
    });

    fastify.get('/check_temperature/:cityName', async (request, reply) => {
        const cityName = request.params.cityName;
        
        const result = await getTemperatureInfo(cityName);
        return result
    });

    fastify.get('/check_temperature/:cityName/:limitTemperature', async (request, reply) => {
        const cityName = request.params.cityName;
        const limitTemperature = request.params.limitTemperature;
        
        const result = await getTemperatureInfo(cityName, limitTemperature);
        return result
    });

    done();
}
