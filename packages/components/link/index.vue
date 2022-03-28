<template>
  <div contenteditable>{{ str }}</div>
  <input type="text" v-model="str" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'PLink',
  setup() {
   const str = ref('Hello Link')
   return {
     str
   } 
  }
})
</script>
