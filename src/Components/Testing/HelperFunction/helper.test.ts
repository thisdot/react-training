import { sum } from "./helper";

describe('Testing sum helper function', () => {
  it('sums for positive numbers',()=>{
    expect(sum(2, 2)).toBe(4);
  });

  it('sums for different positive numbers',()=>{
    expect(sum(3, 2)).toBe(5);
  });

  test('sums for negative numbers', () => {
    expect(sum(-2, -2)).toBe(-4);
  });

  test('sums for zero values', () => {
    expect(sum(0, 0)).toBe(0);
  });
});