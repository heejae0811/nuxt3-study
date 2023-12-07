<script setup lang="ts">
import {useToDoStore} from '@/stores/toDoStore'

const toDo = useToDoStore()
const newToDo = ref('')

let isActive = true

function addToDo() {
  if (newToDo.value) {
    toDo.addToDo(newToDo.value)
    newToDo.value = ''
  }
}

function sortRegistered() {
  toDo.toDoList.sort((a, b) => a.id - b.id)
  isActive = !isActive
}

function sortLatest() {
  toDo.toDoList.sort((a, b) => b.id - a.id)
  isActive = !isActive
}
</script>

<template>
  <section class="w-full max-w-screen-lg min-h-screen m-auto">
    <h1 class="mt-6 mb-12 md:mt-10 text-5xl font-bold text-center">To Do List</h1>

    <form
      class="mb-6"
      @submit.prevent="addToDo()">
      <label
        for="toDo"
        class="block mb-3 text-xl font-bold">
        New To Do
      </label>

      <div class="flex gap-3 md:gap-5">
        <input
          v-model="newToDo"
          type="text"
          id="toDo"
          class="w-3/4 px-3 py-4 rounded outline-none text-black"
          placeholder="할 일을 입력해 주세요."/>
        <button class="w-1/4 bg-teal-600 hover:bg-teal-500 transition rounded">추가하기</button>
      </div>
    </form>

    <div v-if="toDo.toDoList.length > 0">
      <div class="flex gap-2 mb-6">
        <button
          :class="{ 'underline underline-offset-4' : isActive }"
          @click="sortRegistered()">
          등록순
        </button>
        <i>|</i>
        <button
          :class="{ 'underline underline-offset-4' : !isActive }"
          @click="sortLatest()">
          최신순
        </button>
      </div>

      <ul>
        <li
            v-for="(list, key) in toDo.toDoList"
            :key="key"
            class="flex justify-between items-center gap-3 mb-6 px-4 py-3 md:px-5 border rounded">
          <p class="flex gap-2 text-base md:text-lg">
            <span>{{ key + 1 }}.</span> {{ list.content }}
          </p>

          <button
            class="min-w-fit px-5 py-2 bg-teal-600 hover:bg-teal-500 transition rounded"
            @click="toDo.deleteToDo(list.id)">
            삭제
          </button>
        </li>
      </ul>

      <button
        class="block w-full md:w-1/3 m-auto mt-12 px-3 py-4 bg-teal-950 hover:bg-teal-500 transition rounded"
        @click="toDo.clearToDo()">
        전체 삭제하기
      </button>
    </div>
  </section>
</template>