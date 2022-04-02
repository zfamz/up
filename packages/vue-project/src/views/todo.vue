<script setup lang="ts">
import { InputNumber } from '@/components/demo2'
import Submit from '@/components/demo3'
const step = reactive<string[]>([])
step.push('setup')
// onBeforeUpdate(() => {
//   step.push('onBeforeUpdate')
// })
// onUpdated(() => {
//   step.push('onUpdated')
// })
onBeforeMount(() => {
  step.push('onBeforeMount')
})
onMounted(() => {
  step.push('onMounted')
})
onBeforeUnmount(() => {
  step.push('onBeforeUnmount')
})
onUnmounted(() => {
  step.push('onUnmounted')
})
onActivated(() => {
  step.push('onActivated')
})
onDeactivated(() => {
  step.push('onActivated')
})

const todo = ref('')
const list = reactive<string[]>(['init'])
const addTodo = () => {
  if (list.includes(todo.value) || !todo.value.trim()) {
    // console.log('it is exist')
    return
  }
  list.push(todo.value)
  todo.value = ''
}
</script>

<template>
  <div class="absolute left-0 inline write-vertical-right">{{ step.join(' -> ') }}</div>
  <section class="p-4px pt-24px">
    <InputNumber
      @get-sum="
        val => {
          list.push(val)
        }
      "
    >
      Input slot
    </InputNumber>
    <hr class="my-4" />
    <Submit title="title">Submit slot</Submit>
    <hr class="my-4" />
    <div>
      <input v-model="todo" type="text" @keyup.enter="addTodo" />
      <button class="btn ml-4" @click="addTodo">add to todo</button>
    </div>
    <ul class="pt-4 m-auto w-412px">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="rounded-4px border-1 p-4px hover:(border-lime-800) not-last:mb-8px"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>
