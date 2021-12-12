'use-strict'
const https = require('https')
const configs = require('../configs/configs.json')
const errors = require('../errors/errors.json')

const getWeather = async (cityName) => {
    if(cityName === undefined){
        return errors.NO_CITY;
    }

    const apiUrl = configs.OPENWEATHER_URL.replace('PARAM_QUERY', cityName).replace('PARAM_API_KEY', configs.OPENWEATHER_API_KEY)

    return await new Promise((resolve, reject) => {
        https.get(apiUrl, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            })

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(data))
                } catch (error) {
                    resolve(errors.API_JSON_ERROR)
                };
            });
        }).on('error', (err) => {
            resolve(errors.API_RESPONSE_ERROR)
        })

        
    })
}


module.exports = {getWeather};