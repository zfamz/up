<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes()
</script>

<template>
  <ul class="apple flex justify-center gap-8 py-4">
    <li v-for="item in routes" :key="item.path">
      <router-link
        :to="item.path"
        tag="li"
        apple="apple"
        class="text-m1"
      >{{ item.meta.name || item.path }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
.apple {
  @apply relative;
}
.apple::after {
  content: "";
  @apply absolute w-full h-px bg-hex-77c6ff bottom-0;
}
</style>