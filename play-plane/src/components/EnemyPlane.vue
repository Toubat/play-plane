<template>
  <Container :x="enemyPlane.x" :y="enemyPlane.y">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue';
import { setupPlane, Plane, EnemyPlane } from '../game';
import enemyPlaneImg from '../assets/enemyPlane.png';

const { enemyPlane } = defineProps({
  enemyPlane: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
});

enemyPlane.width = 100;
enemyPlane.height = 100;
</script>
