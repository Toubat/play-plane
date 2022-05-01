<script setup lang="ts">
import { reactive } from 'vue';
import { initGame } from './game';
import Plane from './components/Plane.vue';
import Bullet from './components/Bullet.vue';

const { plane, bullets } = initGame(reactive({}), reactive([]));
</script>

<template>
  <Container>
    <Plane :plane="plane"></Plane>
    <Bullet v-for="bullet in bullets" :x="bullet.x" :y="bullet.y"></Bullet>
  </Container>
</template>
