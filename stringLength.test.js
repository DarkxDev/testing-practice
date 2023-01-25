const stringLength = require('./stringLength.js');

test('Is a number', () => {
  expect(typeof stringLength('string')).toBe('number');
});

test('Is in range', () => {
  expect(stringLength('Hello')).toBeLessThanOrEqual(10);
});

test('Is out of range', () => {
  expect(stringLength('Hello, World')).toBe('Error, length exceeded.');
});

test('Is its length correct', () => {
  expect(stringLength('Hello!')).toBeLessThanOrEqual(6);
});