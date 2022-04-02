<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
const { counter } = storeToRefs(store)
const name = ref('POP')
const double = computed(() => counter.value * 2)
</script>

<template>
  <div class="text-center">{{ name }} {{ double }}</div>
</template>
