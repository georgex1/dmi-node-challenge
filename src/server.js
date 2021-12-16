'use strict'
const server = require('./app')({ logger: true })

const port = process.env.PORT || 3000
server.listen(port, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
})
