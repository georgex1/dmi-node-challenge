const {getWeather} = require('../../src/api/weatherApi');
const errors = require('../../src/errors/errors.json')

describe("test Weather API", () => {
    test('getWeather without city', async () => {
        const result = await getWeather();
        
        expect(result).toBe(errors.NO_CITY);
    })

    test('getWeather with city', async () => {
        const result = await getWeather("Misiones, Argentina");
        
        expect(result).not.toBe(null);
    })

    afterAll(done => {
        done()
    })
})


