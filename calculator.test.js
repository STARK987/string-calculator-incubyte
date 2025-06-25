const { add } = require('./calculator');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number for single value', () => {
    expect(add("1")).toBe(1);
});

test('adds two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('adds multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('supports newline as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('ignores numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1")).toBe(1001);
});

test('supports multi-character custom delimiters', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test('supports multiple custom delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test('supports multiple multi-character delimiters', () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
});

test('throws on a single negative number', () => {
    expect(() => add("4,-5")).toThrow("negative numbers not allowed: -5");
});

test('throws with multiple negative numbers', () => {
    expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed: -1, -3");
});
