const { getWeather } = require('../../src/api/weatherApi')

describe('test Weather API', () => {
    test('getWeather handle Error: Nothing to geocode', async () => {
        try {
            await getWeather()
        } catch (err) {
            expect(err).not.toBe('')
        }
    })

    test('getWeather handle Error: city not found', async () => {
        try {
            await getWeather('cityfakename')
        } catch (err) {
            expect(err).not.toBe('')
        }
    })

    test('getWeather with city', async () => {
        const result = await getWeather('Misiones, Argentina')
        expect(result).not.toBe('')
    })

    afterAll(done => {
        done()
    })
})
