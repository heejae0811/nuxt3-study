<script setup lang="ts">
interface IToDo {
  id: number
  todo: string
  created_at: Date
}

const newToDo = ref('')
const isActive = ref(true)

// axios.get 기능 (toDo 가져오기)
const { data, refresh } = await useFetch<IToDo[]>('http://localhost:3001/todo')
const toDoData = ref(data.value ? [...data.value] : [])

watch(() => data.value, () => {
  toDoData.value = isActive.value ? [...data.value] : [...data.value].reverse()
})

// axios.post 기능 (toDo 추가하기)
async function addToDo() {
  if(newToDo.value === '') {
    alert('할 일을 입력해 주세요.')
  } else {
    await $fetch('http://localhost:3001/todo', {
      method: 'POST',
      body: { todo: newToDo.value }
    })

    newToDo.value = ''
    await refresh()
  }
}

// axios.delete 기능 (toDo 삭제하기)
async function deleteToDo(id: number) {
  await $fetch(`http://localhost:3001/todo/${id}`, {
    method: 'DELETE'
  })

  await refresh()
}

// axios.delete 기능 (toDo 전체 삭제하기)
async function clearToDo() {
  if(window.confirm('리스트를 모두 삭제하시겠습니까?')) {
    await $fetch(`http://localhost:3001/todo`, {
      method: 'DELETE'
    })

    await refresh()
  }
}

// 등록순, 최신순 정렬하기
function sortToDo(compareFn: (a: IToDo, b: IToDo) => number) {
  toDoData.value = [...data.value].sort(compareFn)
  isActive.value = !isActive.value
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

    <div v-if="toDoData.length > 0">
      <div class="flex gap-2 mb-6">
        <button
          :class="{ 'underline underline-offset-4' : isActive }"
          @click="() => sortToDo((a, b) => a.id - b.id)">
          등록순
        </button>
        <i>|</i>
        <button
          :class="{ 'underline underline-offset-4' : !isActive }"
          @click="() => sortToDo((a, b) => b.id - a.id)">
          최신순
        </button>
      </div>

      <ul>
        <li
            v-for="(data, key) in toDoData"
            :key="key"
            class="flex justify-between items-center gap-3 mb-6 px-4 py-3 md:px-5 border rounded">
          <p class="flex gap-2 text-base md:text-lg">
            <span>{{ key + 1 }}.</span> {{ data.todo }}
          </p>

          <button
            class="min-w-fit px-5 py-2 bg-teal-600 hover:bg-teal-500 transition rounded"
            @click="deleteToDo(data.id)">
            삭제
          </button>
        </li>
      </ul>

      <button
        class="block w-full md:w-1/3 m-auto mt-12 px-3 py-4 bg-teal-950 hover:bg-teal-500 transition rounded"
        @click="clearToDo()">
        전체 삭제하기
      </button>
    </div>
  </section>
</template>