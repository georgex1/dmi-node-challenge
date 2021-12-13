
'use-strict'
const {getWeather} = require('../api/weatherApi')
const configs = require('../configs/configs.json')

const getTemperatureInfo = async (cityName, limitTemperature = configs.DEFAULT_LIMIT_TEMPERATURE) => {
    const response = await checkIfTemperatureHigher(cityName, limitTemperature);

    if(response?.error){
        return response;
    }else{
        return {
            "compare_temp_location": cityName,
            "compare_temp_value": limitTemperature,
            "actual_temp_is_higher": response
        };
    }
}

const checkIfTemperatureHigher = async (cityName, limitTemperature = configs.DEFAULT_LIMIT_TEMPERATURE) => {
    const apiResult = await getWeather(cityName)

    if(apiResult?.error){
        return apiResult;
    }else{
        if(apiResult.main.temp > limitTemperature){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = {getTemperatureInfo, checkIfTemperatureHigher}