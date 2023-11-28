export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Heejae'}),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})