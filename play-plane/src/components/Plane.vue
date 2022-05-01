<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue';
import { setupPlane, Plane } from '../game';
import planeImg from '../assets/plane.png';

const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    plane.attack();
  }

  switch (e.code) {
    case 'ArrowDown':
      plane.moveDown();
      break;
    case 'ArrowUp':
      plane.moveUp();
      break;
    case 'ArrowLeft':
      plane.moveLeft();
      break;
    case 'ArrowRight':
      plane.moveRight();
      break;
    default:
      break;
  }
});
</script>
