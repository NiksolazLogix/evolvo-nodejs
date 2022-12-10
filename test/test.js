"use strict";
const { Datatest } = require('../dist/modules/moduletest');
const dt = new Datatest();
describe("moduletest", () => {
    test("moduletest read message start", () => {
        expect(dt.start()).toBe('Hello');
    });
});
//# sourceMappingURL=test.js.map