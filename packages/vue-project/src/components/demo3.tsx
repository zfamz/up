import { renderSlot } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const text = ref(100)
    return {
      text,
    }
  },
  render() {
    const { text, title, $slots } = this
    return (
      <>
        <p>{title}</p>
        <div>{text} My Submit Componen</div>
        {renderSlot($slots, 'default')}
      </>
    )
  },
})
