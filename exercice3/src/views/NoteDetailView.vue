<script setup>
import { getNoteById } from '@/services/api'

const props = defineProps({
  id: Number
})

const note = getNoteById(props.id)
</script>

<template>
  <main></main>
</template>
