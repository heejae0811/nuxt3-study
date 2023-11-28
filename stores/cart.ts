import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',

  state: () => ({
    rawItems: [] as string[],
  }),

  getters: {
    items: (state): Array<{ name: string; amount: number }> =>
      state.rawItems.reduce((items, item) => {
        const existingItem = items.find((it) => it.name === item)

        if (!existingItem) {
          items.push({ name: item, amount: 1 })
        } else {
          existingItem.amount++
        }

        console.log('1', state.rawItems)
        return items
      }, [] as Array<{ name: string; amount: number }>),
  },

  actions: {
    addItem(name: string) {
      this.rawItems.push(name)
    },

    removeItem(name: string) {
      const i = this.rawItems.lastIndexOf(name)
      if (i > -1) this.rawItems.splice(i, 1)
    },

    increaseItem(name: string) {
      const existingItem = this.items.find(it => it.name === name)

      if (existingItem) {
        existingItem.amount++
      }


      console.log(this.items)
    },

    decreaseItem(name: string) {

    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
