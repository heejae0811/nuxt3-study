<script setup lang="ts">
import { useToDoStore } from '@/stores/toDoStore'

const toDo = useToDoStore()
const newToDo = ref('')

function addToDo() {
  if(newToDo.value) {
    toDo.addToDo(newToDo.value)
    newToDo.value = ''
  }
}
</script>

<template>
  <div class="w-full max-w-screen-lg m-auto">
    <h1 class="mb-10 text-5xl font-bold text-center">ToDo List</h1>

    <form @submit.prevent="addToDo()">
      <label for="toDo" class="block mb-3 text-xl font-bold">New ToDo</label>

      <div class="flex justify-between gap-5">
        <input
          type="text"
          id="toDo"
          class="w-3/4 px-3 py-4 rounded text-black"
          v-model="newToDo"/>
        <button class="w-1/4 bg-slate-500 rounded">Add ToDo</button>
      </div>
    </form>

    <ul>
      <li
        v-for="(list, key) in toDo.toDoList"
        :key="key"
        class="flex justify-between items-center gap-5 mt-5 px-5 py-2 border rounded">
        <p class="flex gap-5 text-lg">
          <span>{{ key + 1 }}.</span> {{ list.content }}
        </p>
        <button
          class="px-5 py-2 bg-slate-500 rounded"
          @click="toDo.deleteToDo(list.id)">
          Delete
        </button>
      </li>
    </ul>

    <button
      v-if="toDo.toDoList.length > 0"
      class="block w-1/3 mt-10 m-auto px-3 py-4 bg-slate-400 rounded"
      @click="toDo.clearTodo()">
      Clear ToDo List
    </button>
  </div>
</template>