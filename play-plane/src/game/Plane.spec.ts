import { describe, expect, it } from 'vitest';
import Bullet from './Bullet';
import { setupPlane } from './Plane';

describe('Plane', () => {
  describe('Move', () => {
    const defaultOptions = {
      x: 0,
      y: 0,
      speed: 1,
    };

    function createPlane() {
      return setupPlane({}, [], { ...defaultOptions });
    }

    it('move down', () => {
      const plane = createPlane();
      plane.moveDown();

      expect(plane.y).toBe(1);
    });

    it('move up', () => {
      const plane = createPlane();
      plane.moveUp();

      expect(plane.y).toBe(-1);
    });

    it('move left', () => {
      const plane = createPlane();
      plane.moveLeft();

      expect(plane.x).toBe(-1);
    });

    it('move right', () => {
      const plane = createPlane();
      plane.moveRight();

      expect(plane.x).toBe(1);
    });
  });
});

describe('Attack', () => {
  it('attack', () => {
    const bullets = [];
    const plane = setupPlane({}, bullets);
    plane.attack();

    expect(bullets.length).toBe(1);
  });
});

describe('Run', () => {
  it('Move all bullets', () => {
    const bullet = new Bullet();
    const plane = setupPlane({}, [bullet]);
    plane.run();

    expect(bullet.y).not.toBe(0);
  });

  it('Remove out-of-border bullets', () => {
    const bullets = [];
    const plane = setupPlane({}, bullets, { x: 0, y: 0 });
    plane.attack();

    plane.run();

    expect(bullets.length).toBe(0);
  });
});
