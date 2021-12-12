const fastify = require('fastify')({ logger: true })

fastify.register(require('./routes'))


const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await fastify.listen(port)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()