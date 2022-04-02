<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
const { counter, names } = storeToRefs(store)
const name = ref('')
const addName = () => {
  store.addName(name.value)
}
</script>

<template>
  <div>
    <h1>{{ counter }}</h1>
    <div>
      <input v-model="name" type="text" />
      <span class="cursor-pointer" @click="addName">add name</span>
    </div>
    <p>{{ names }}</p>
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <section>
      <el-button type="success">Success</el-button>
      <el-button type="danger">fail</el-button>
    </section>
  </div>
</template>
