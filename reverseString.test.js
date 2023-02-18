const reverseString = require('./reverseString.js');

test('Is a string', () => {
  expect(typeof reverseString('Hello')).toBe('string');
});