<script setup lang="ts">
import { reactive } from 'vue';
import { initGame } from './game';
import Plane from './components/Plane.vue';
import Bullet from './components/Bullet.vue';
import EnemyPlane from './components/EnemyPlane.vue';
import { EnemyPlane as Enemy } from './game';

const { plane, bullets, enemyPlanes } = initGame(
  reactive({}),
  reactive([]),
  reactive([new Enemy(), new Enemy(), new Enemy()])
);
</script>

<template>
  <Container>
    <Plane :plane="plane"></Plane>
    <Bullet v-for="bullet in bullets" :bullet="bullet"></Bullet>
    <EnemyPlane v-for="enemy in enemyPlanes" :enemyPlane="enemy" />
  </Container>
</template>
