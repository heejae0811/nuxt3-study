import { defineStore } from 'pinia'

export const useToDoStore = defineStore('toDo', {
  state: () => ({
    toDoList: [] as string[]
  })
})