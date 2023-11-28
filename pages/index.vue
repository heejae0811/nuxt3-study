<script setup lang="ts">
import { useToDoStore } from "~/stores/toDoStore";

const toDo = useToDoStore()
</script>

<template>
  {{ toDo }}

  <div class="w-1/2 m-auto">
    <h1 class="mb-10 text-5xl font-bold text-center">ToDo List</h1>

    <div>
      <label for="toDo" class="block mb-3 text-xl font-medium">New ToDo</label>

      <div class="flex justify-between gap-5">
        <input type="text" id="toDo" class="w-3/4 h-10 rounded">
        <button class="w-1/4 h-10 bg-slate-500 rounded">Add ToDo</button>
      </div>
    </div>

    <ul>
      <li></li>
    </ul>
  </div>
</template>