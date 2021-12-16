const HttpStatus = require('http-status-codes')
const buildFastify = require('../src/app')
const errors = require('../src/errors/errors.json')

const app = buildFastify()

afterAll(() => app.close())

describe('requests the "/check_temperature" route', () => {
    test('Should show DMI weather challenge title', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/'
        })

        expect(response.statusCode).toBe(HttpStatus.StatusCodes.OK)
        expect(response.body).toBe('DMI weather challenge')
    })

    test('Should have success response with no data', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/check_temperature',
            payload: {}
        })

        const JSONBody = JSON.parse(response.body)

        expect(response.statusCode).toBe(HttpStatus.StatusCodes.OK)
        expect(JSONBody.compare_temp_location).toBe('Rio Cuarto, Argentina')
        expect(JSONBody.compare_temp_value).toBe(15)
        expect(JSONBody).toHaveProperty('actual_temp_is_higher')
    })

    test('Temperature would have to be higher in city Misiones, Argentina', async () => {
        const postData = {
            cityName: 'Misiones, Argentina',
            limitTemperature: Number.MIN_SAFE_INTEGER
        }

        const response = await app.inject({
            method: 'POST',
            url: '/check_temperature',
            payload: postData
        })

        const JSONBody = JSON.parse(response.body)

        expect(response.statusCode).toBe(HttpStatus.StatusCodes.OK)
        expect(JSONBody.compare_temp_location).toBe(postData.cityName)
        expect(JSONBody.compare_temp_value).toBe(postData.limitTemperature)
        expect(JSONBody.actual_temp_is_higher).toBe(true)
    })

    test('Temperature would have to be lower in city Misiones, Argentina', async () => {
        const postData = {
            cityName: 'Misiones, Argentina',
            limitTemperature: Number.MAX_SAFE_INTEGER
        }

        const response = await app.inject({
            method: 'POST',
            url: '/check_temperature',
            payload: postData
        })

        const JSONBody = JSON.parse(response.body)

        expect(response.statusCode).toBe(HttpStatus.StatusCodes.OK)
        expect(JSONBody.compare_temp_location).toBe(postData.cityName)
        expect(JSONBody.compare_temp_value).toBe(postData.limitTemperature)
        expect(JSONBody.actual_temp_is_higher).toBe(false)
    })

    test('Should have error city not found', async () => {
        const postData = {
            cityName: 'FakeCity'
        }

        const response = await app.inject({
            method: 'POST',
            url: '/check_temperature',
            payload: postData
        })

        const JSONBody = JSON.parse(response.body)

        expect(response.statusCode).toBe(HttpStatus.StatusCodes.UNPROCESSABLE_ENTITY)
        expect(JSONBody.error).toBe(errors.API_RESPONSE_ERROR.error)
    })

    test('Should have error Temperature not a number', async () => {
        const postData = {
            limitTemperature: 'not a number'
        }

        const response = await app.inject({
            method: 'POST',
            url: '/check_temperature',
            payload: postData
        })

        const JSONBody = JSON.parse(response.body)

        expect(response.statusCode).toBe(HttpStatus.StatusCodes.UNPROCESSABLE_ENTITY)
        expect(JSONBody.error).toBe(errors.TEMPERATURE_NAN.error)
    })
})
