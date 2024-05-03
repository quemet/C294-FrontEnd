<script setup>
import { ref } from 'vue'

let notes = ref([
  {
    title: '',
    description: ''
  }
])

let tit = ''
let des = ''

function onSubmit() {
  alert('1')
  notes.value.push({ title: tit, description: des })

  tit = ''
  des = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h1>Ajouter une note</h1>
    <br />
    <input type="text" name="title" id="title" v-model="tit" placeholder="Titre" />
    <br />
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="5"
      v-model="des"
      placeholder="Description"
    ></textarea>
    <br />
    <input type="submit" value="Ajouter une note" />
  </form>
</template>
