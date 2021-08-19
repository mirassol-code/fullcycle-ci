const sum = require('./sum');
const subtract = require('./sum');

test('add 1 + 2 to be equal 3', () =>{
    expect(sum(1, 2)).toBe(3);
})

test('subtract 3 - 2 to be equal 1', () =>{
    expect(subtract(3, 2)).toBe(1);
})