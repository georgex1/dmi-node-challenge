'use strict'
const server = require('./app')({ logger: true })

const port = process.env.PORT || 3000
const address = '0.0.0.0'
server.listen(port, address, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
})
