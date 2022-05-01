import { Application, PlaneGeometry } from 'pixi.js';
import { Plane, setupPlane } from './Plane';

export const game = new Application({
  width: 500,
  height: 500,
});

export * from './Plane';

document.body.append(game.view);

export function initGame(_plane, bullets): any {
  const plane = setupPlane(_plane, bullets);

  mainTicker(plane);

  return {
    plane,
    bullets,
  };
}

function mainTicker(plane: Plane) {
  game.ticker.add(() => {
    plane.run();
  });
}
