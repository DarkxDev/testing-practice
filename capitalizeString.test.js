const capitalizeString = require('./capitalizeString.js');

test('Is it a string', () => {
  expect(typeof capitalizeString('hello')).toBe('string');
});

test('Is it capitalized', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});