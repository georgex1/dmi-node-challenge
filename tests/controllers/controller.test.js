const {checkIfTemperatureHigher, getTemperatureInfo} = require('../../src/controllers/index');

describe("test Main Controller", () => {

    test('checkIfTemperatureHigher than Number.POSITIVE_INFINITY', async () => {
        const result = await checkIfTemperatureHigher("Misiones, Argentina", Number.POSITIVE_INFINITY);
        expect(result).toBe(false);
    })

    test('checkIfTemperatureHigher than 0', async () => {
        const result = await checkIfTemperatureHigher("Misiones, Argentina", 0);
        expect(result).toBe(true);
    })

    test('getTemperatureInfo json', async () => {
        const result = await getTemperatureInfo("Rio Cuarto, Argentina", 150);

        const expectedResult = {
            "compare_temp_location": "Rio Cuarto, Argentina",
            "compare_temp_value": 150,
            "actual_temp_is_higher": false
        }

        expect(result).toStrictEqual(expectedResult);
    })

    afterAll(done => {
        done()
    })
    
})


