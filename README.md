# DMI

## Weather Challenge

With the follow rest api we can check if the temperature is greater or lesser of 15 celsius degrees in Rio Cuarto, Argentina by default

### service data:
<br />
endpoint: /check_temperature
<br />
method: POST
<br />
Content-Type: application/json

#### Parameters:

- cityName:
Change the city to compare the temperature
Default: Rio Cuarto, Argentina


- limitTemperature
Change the limit temperature to compare
Default: 15


#### examples:

/check_temperature
<br />
POST data:

```json
{
    "cityName": "Misiones, Argentina"
}
```

Will check if the temperature is greater than 15 celsius degrees in Misiones, Argentina


/check_temperature
<br />
POST data:

```json
{
    "cityName": "Misiones, Argentina",
    "limitTemperature": 40
}
```
Will check if the temperature is greater than 20 celsius degrees in Misiones, Argentina


#### Response Example:
```json
{
    "compare_temp_location": "Rio Cuarto, Argentina",
    "compare_temp_value": 15,
    "actual_temp_is_higher": true
}
```