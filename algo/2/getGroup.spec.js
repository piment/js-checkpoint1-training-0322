const getGroup = require('./getGroup');

test('2, 6 and 18 return A', () => {
  expect(getGroup(2)).toBe('A');
  expect(getGroup(6)).toBe('A');
  expect(getGroup(18)).toBe('A');
});
test('1, 7 and 19 return B', () => {
  expect(getGroup(1)).toBe('B');
  expect(getGroup(7)).toBe('B');
  expect(getGroup(19)).toBe('B');
});
