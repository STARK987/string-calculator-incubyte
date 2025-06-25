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

test('throws on negative numbers', () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
});

test('throws with all negative numbers listed', () => {
    expect(() => add("-1,-2")).toThrow("negative numbers not allowed: -1, -2");
});
