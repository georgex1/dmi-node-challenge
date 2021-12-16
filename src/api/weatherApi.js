'use-strict'
const https = require('https')
const configs = require('../configs/configs.json')
const errors = require('../errors/errors.json')

const getWeather = async (cityName = '') => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${configs.OPENWEATHER_API_KEY}`
    return new Promise((resolve, reject) => {
        https.get(apiUrl, (resp) => {
            let data = ''
            resp.on('data', (chunk) => {
                data += chunk
            })

            resp.on('end', () => {
                try {
                    const jsonResponse = JSON.parse(data)
                    return (jsonResponse.cod !== 200) ? reject(jsonResponse.message) : resolve(jsonResponse)
                } catch (error) {
                    reject(errors.API_JSON_ERROR.error)
                }
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}

module.exports = { getWeather }
