<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div class="border-dark-50">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
