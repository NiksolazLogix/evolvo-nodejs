const {Datatest} = require('../modules/moduletest.js');
const dt = new Datatest()

describe("moduletest", () => {
    test("moduletest read message start", () => {
        expect(dt.start()).toBe('Hello')
    })
})

