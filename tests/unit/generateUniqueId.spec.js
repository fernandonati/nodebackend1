const generateUniqueId = require('../../src/libs/generateUniqueId')

describe('Generate Unique ID', () => {
    it('Should generate a unique ID',() => {
       //expect(1+2).toBe(e);  a sample test.
       const id = generateUniqueId();
       expect(id).toHaveLength(8);
    });
});