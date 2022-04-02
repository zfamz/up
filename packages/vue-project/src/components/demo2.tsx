// https://github.com/cangshudada/vite-vue3-tsx
export const InputNumber = defineComponent({
  emits: ['getSum'],
  setup(props, { emit, slots }) {
    const text = ref('JSX Component')
    const count = ref<number>(0)
    const sum = computed(() => {
      return count.value * 2 + 5
    })
    const add = () => {
      count.value += 1
      emit('getSum', sum.value)
    }
    return () => (
      <>
        <div class="inline-block">
          {text.value}
          {count.value}
        </div>
        <button class="mx-8px" onClick={add}>
          up
        </button>
        {sum.value}
        {slots.default && slots.default()}
      </>
    )
  },
})
