'use strict'

const fastify = require('fastify')

function buildFastify (opts = {}) {
    const app = fastify(opts)
    app.register(require('./routes'))
    return app
}

module.exports = buildFastify
