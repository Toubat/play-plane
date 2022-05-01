import Bullet from './Bullet';

export interface Plane {
  x: number;
  y: number;
  speed: number;
  bullets: Bullet[];
  attack: () => void;
  run: () => void;
  moveDown(): void;
  moveUp(): void;
  moveLeft(): void;
  moveRight(): void;
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 10,
};

export function setupPlane(plane, bullets: Bullet[] = [], options: any = defaultOptions): Plane {
  Object.assign(plane, defaultOptions);
  Object.assign(plane, options);

  plane.bullets = bullets;

  initAttack(plane, bullets);
  initMove(plane);
  initRun(plane, bullets);

  return plane;
}

function initAttack(plane, bullets) {
  plane.attack = () => {
    const bullet = new Bullet();
    bullet.x = plane.x;
    bullet.y = plane.y;
    bullet.border = 0;
    bullet.onDestory = () => {
      bullets.splice(bullets.indexOf(bullet), 1);
    };
    bullets.push(bullet);
  };
}

function initRun(plane, bullets) {
  plane.run = () => {
    bullets.forEach((bullet) => {
      bullet.move();
    });
  };
}

function initMove(plane) {
  plane.moveDown = function () {
    plane.y += plane.speed;
  };

  plane.moveUp = function () {
    plane.y -= plane.speed;
  };

  plane.moveLeft = function () {
    plane.x -= plane.speed;
  };

  plane.moveRight = function () {
    plane.x += plane.speed;
  };
}
