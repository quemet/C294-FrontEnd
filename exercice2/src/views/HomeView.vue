<script setup>
import { ref } from 'vue'

let task = ''

let tasks = ref([
  {
    name: 'faire la vaiselle',
    done: false,
    hide: false
  }
])

function showAllTasks() {
  tasks.value.map((t) => {
    t.hide = false
  })
}

function showTaskNotDone() {
  tasks.value.map((t) => {
    if (t.done == true) {
      t.hide = true
    } else {
      t.hide = false
    }
  })
}

function showTaskDone() {
  tasks.value.map((t) => {
    if (t.done == false) {
      t.hide = true
    } else {
      t.hide = false
    }
  })
}

function isDone(index) {
  if (tasks.value[index].done == true) {
    tasks.value[index].done = false
  } else {
    tasks.value[index].done = true
  }
}

function add() {
  tasks.value.push({ name: task, done: false, hide: false })
  task = ''
}
</script>

<template>
  <div>
    <h1>Gestionnaire de Tâches</h1>

    <div>
      <input type="text" name="task" id="task" v-model="task" />
      <button @click="add()">Ajouter</button>
    </div>

    <h2>Toutes les tâches:</h2>
    <ul>
      <li
        v-for="(task, id) in tasks"
        :key="id"
        @click="isDone(id)"
        :id="task.done ? 'done' : ''"
        :class="task.hide ? 'hide' : ''"
      >
        {{ task.name }}
      </li>
    </ul>

    <div>
      <button @click="showAllTasks()">Toutes</button>
      <button @click="showTaskNotDone()">Actives</button>
      <button @click="showTaskDone()">Terminés</button>
    </div>
  </div>
</template>

<style scoped>
#done {
  text-decoration: line-through;
}

.hide {
  display: none;
}
</style>
