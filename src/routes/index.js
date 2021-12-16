'use-strict'
const { getTemperatureInfo } = require('../controllers')

module.exports = function (fastify, opts, done) {
    fastify.get('/', (request, reply) => {
        reply.send('DMI weather challenge')
    })

    fastify.post('/check_temperature', async (request, reply) => {
        const result = await getTemperatureInfo(request, reply)
        return result
    })

    done()
}
