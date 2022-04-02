export const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0,
      name: ['zfamz'],
    }
  },
  getters: {
    names: state => {
      return state.name.join()
    },
  },
  actions: {
    addName(name: string) {
      this.name.push(name)
    },
  },
})
