'use strict'

const fastify = require('fastify')

function buildFastify (opts = {}) {
    const app = fastify(opts)
    app.register(require('./routes'))
    //   app.get('/', async function (request, reply) {
    //     return { hello: 'world' }
    //   })

    return app
}

module.exports = buildFastify
