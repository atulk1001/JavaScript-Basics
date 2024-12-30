const { test, expect } = require('@jest/globals');

test('should add two numbers correctly', () => {
    expect(1 + 1).toBe(2);
});

test('should subtract two numbers correctly', () => {
    expect(5 - 3).toBe(2);
});

test('should multiply two numbers correctly', () => {
    expect(3 * 4).toBe(12);
});

test('should divide two numbers correctly', () => {
    expect(10 / 2).toBe(5);
});