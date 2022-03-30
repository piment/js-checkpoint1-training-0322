const getGroup = require('./getGroup');

test('2, 6 and 18 return A', () => {
  expect(getGroup(2)).toBe(true);
  expect(getGroup(6)).toBe(true);
  expect(getGroup(18)).toBe(true);
});
test('1, 7 and 19 return B', () => {
  expect(getGroup(1)).toBe(false);
  expect(getGroup(7)).toBe(false);
  expect(getGroup(19)).toBe(false);
});
