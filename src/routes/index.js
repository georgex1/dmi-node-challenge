'use-strict'
const { getTemperatureInfo } = require('../controllers')

module.exports = function (fastify, opts, done) {
    fastify.post('/check_temperature', async (request, reply) => {
        const result = await getTemperatureInfo(request, reply)
        return result
    })

    done()
}
