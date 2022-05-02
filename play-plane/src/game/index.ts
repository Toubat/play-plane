import { Application, PlaneGeometry } from 'pixi.js';
import { Bullet } from './Bullet';
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from './EnemyPlane';
import { fighting } from './fighting';
import { Plane, setupPlane } from './Plane';

export const game = new Application({
  width: 500,
  height: 500,
});

export * from './Plane';
export * from './Bullet';
export * from './EnemyPlane';

document.body.append(game.view);

export function initGame(_plane, bullets: Bullet[], enemyPlanes: EnemyPlane[]) {
  const plane = setupPlane(_plane, bullets);

  initEnemyPlanes(enemyPlanes);

  mainTicker(plane, enemyPlanes);

  return {
    plane,
    bullets,
    enemyPlanes,
  };
}

function mainTicker(plane: Plane, enemyPlanes: EnemyPlane[]) {
  game.ticker.add(() => {
    plane.run();
    runEnemyPlanes(enemyPlanes);
    fighting(plane, enemyPlanes);
  });
}
