<script setup>
import { getNotes } from '@/services/api'
import { ref } from 'vue'
import NoteDetailView from './NoteDetailView.vue'

const notes = ref(getNotes())
</script>

<template>
  <main>
    <ul>
      <li v-for="(note, id) in notes" :key="id" @click="<NoteDetailView id=id />"></li>
    </ul>
  </main>
</template>
