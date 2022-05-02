import { describe, expect, it } from 'vitest';
import { hitTestObject } from './hitTestObject';

describe('hitTestObject', () => {
  it('should return true when two box intersect', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };
    const rectB = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    };
    const r = hitTestObject(rectA, rectB);

    expect(r).toBe(true);
  });

  it('should return false when two box not intersect', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };
    const rectB = {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
    };
    const r = hitTestObject(rectA, rectB);

    expect(r).toBe(false);
  });
});
