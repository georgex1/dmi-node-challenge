# DMI

## Weather Challenge

With the follow rest api we can check if the temperature is greater or lesser of 15 celcius degrees in Rio Cuarto, Argentina

The service name is /check_temperature

#### Parameters:

You can check the temperature of other city and with other limit to compare:
/check_temperature/:cityName/:limitTemperature

- :cityName
Change the city to compare the temperature

- :limitTemperature
Change the limit temperature to compare


#### examples:

/check_temperature/Misiones, Argentina
<br />
Will check if the temperature is greater than 15 celcius degrees in Misiones, Argentina

/check_temperature/Misiones, Argentina/20
<br />
Will check if the temperature is greater than 20 celcius degrees in Misiones, Argentina


#### Response:
```json
{
    "compare_temp_location": "Rio Cuarto, Argentina",
    "compare_temp_value": 15,
    "actual_temp_is_higher": true
}
```