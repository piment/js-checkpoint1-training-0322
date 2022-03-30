const hasLegalAge = require('./hasLegalAge');

test('21, 18 and 67 return true', () => {
  expect(hasLegalAge(21)).toBe(true);
  expect(hasLegalAge(18)).toBe(true);
  expect(hasLegalAge(67)).toBe(true);
});

test('12, 0 and 17 return false', () => {
  expect(thirdAngle(12)).toBe(false);
  expect(thirdAngle(0)).toBe(false);
  expect(thirdAngle(17)).toBe(false);
});
