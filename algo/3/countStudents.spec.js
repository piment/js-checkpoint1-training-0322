const countStudents = require('./countStudents');

test('Empty array is 0', () => {
  expect(countStudents([])).toBe(0);
});

test("['js'] is 1", () => {
  expect(countStudents(['js'])).toBe(1);
});

test("['java'] is 0", () => {
  expect(countStudents(['java'])).toBe(0);
});

test("['js', 'JS', 'JavaScript', 'javascript', 'JaVaScRiT'] is 5", () => {
  expect(countStudents(['js', 'JS', 'JavaScript', 'javascript', 'JaVaScRiT'])).toBe(5);
});


test("['java', 'js', 'Python', 'JavaScript', 'JS', 'C#'] is 3", () => {
  expect(countStudents(['java', 'js', 'Python', 'JavaScript', 'JS', 'C#'])).toBe(3);
});