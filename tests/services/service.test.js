const { checkIfTemperatureHigher } = require('../../src/services/index')
const errors = require('../../src/errors/errors.json')

describe('Test Service', () => {
    test('Temperature must by lower than Number.MAX_SAFE_INTEGER', async () => {
        const result = await checkIfTemperatureHigher('Misiones, Argentina', Number.MAX_SAFE_INTEGER)
        expect(result).toBe(false)
    })

    test('Temperature must by higher than MIN_SAFE_INTEGER', async () => {
        const result = await checkIfTemperatureHigher('Misiones, Argentina', Number.MIN_SAFE_INTEGER)
        expect(result).toBe(true)
    })

    test('getWeather handle Error: Empty City', async () => {
        try {
            await checkIfTemperatureHigher('cityfakename')
        } catch (err) {
            console.log(err)
            // city not found
            expect(err).not.toBe(null)
        }
    })

    test('Temperature Not a Number handle Error', async () => {
        const result = await checkIfTemperatureHigher('Misiones, Argentina', 'not a number')
        expect(result).toBe(errors.TEMPERATURE_NAN)
    })

    afterAll(done => {
        done()
    })
})
