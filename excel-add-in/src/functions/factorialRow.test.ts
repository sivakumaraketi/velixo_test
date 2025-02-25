const factorial = (n: number): number => {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

test('factorial of 0 is 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial of 1 is 1', () => {
    expect(factorial(1)).toBe(1);
});

test('factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120);
});