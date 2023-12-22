<script setup lang="ts">
const route = useRoute()

const { data } = await useFetch(`http://localhost:3001/todo/${route.params.id}`)
</script>

<template>
  <section>
    <h1 class="mt-6 mb-12 md:mt-10 text-5xl font-bold text-center">To Do Detail</h1>

    <div class="p-4 md:p-6 md:pb-12 border rounded">
      <p class="block mb-6 text-xl font-bold text-right">No.{{ data.id }}</p>
      <p class="flex gap-2 text-base md:text-lg">{{ data.todo }}</p>
    </div>

    <NuxtLink to="/"  class="block w-full md:w-1/3 m-auto mt-12 px-3 py-4 bg-teal-950 hover:bg-teal-500 transition rounded text-center">
      Go to To Do List
    </NuxtLink >
  </section>
</template>

