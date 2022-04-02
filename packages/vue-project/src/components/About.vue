<script setup lang="ts">
import { createVNode, render } from 'vue'
import { useStore } from '@/store'
import Pop from '@/components/pop.vue'
const store = useStore()
const { counter } = storeToRefs(store)
const changeCounter = () => {
  counter.value += 1
  // console.log('counter: ', counter)
}
const container = document.createElement('div')
onMounted(() => {
  const vm = createVNode(Pop)
  render(vm, container)
  document.body.appendChild(container)
})
onBeforeUnmount(() => {
  render(null, container)
})
</script>

<template>
  <div>
    <h1>{{ counter }}</h1>
    <button class="text-m1" @click="changeCounter">Add</button>
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
  </div>
</template>
