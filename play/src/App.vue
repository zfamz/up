<script setup lang="ts">
// import { PLink } from 'ptest-ui'
import { ref } from 'vue'
const number: number = ref(Date.now())
</script>

<template>
  <p>Hello play page</p>
  <div>{{ number }}</div>
  <PLink />
</template>
