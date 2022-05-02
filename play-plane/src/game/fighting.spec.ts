import { describe, expect, it } from 'vitest';
import { Bullet } from './Bullet';
import { EnemyPlane } from './EnemyPlane';
import { fighting } from './fighting';
import { setupPlane } from './Plane';

describe('fighting', () => {
  it('should destory bullet and plane when collide with enemy plane', () => {
    const bullet = new Bullet();
    bullet.x = 0;
    bullet.y = 0;
    bullet.width = 100;
    bullet.height = 100;
    const bullets = [bullet];
    const plane = setupPlane({}, bullets);

    const enemy = new EnemyPlane();
    enemy.x = 50;
    enemy.y = 50;
    enemy.width = 100;
    enemy.height = 100;
    const enemyPlanes = [enemy];

    fighting(plane, enemyPlanes);

    expect(bullets.length).toBe(0);
    expect(enemyPlanes.length).toBe(0);
  });

  it('should not destory bullet and plane when no collision happen', () => {});
});
