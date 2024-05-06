<script setup>
import { ref } from 'vue'

let counter = ref(0)

function increment() {
  counter.value += 1
}

function decrement() {
  if (counter.value > 0) {
    counter.value--
  }
}

function reset() {
  counter.value = 0
}
</script>

<template>
  <div>
    <h1>Compteur dynamique</h1>
    <p>La valeur dynamique du compteur est : {{ counter }}</p>
    <div>
      <button @click="increment">Incrémenter</button>
      <button @click="decrement">Décrémenter</button>
      <button @click="reset">Réinitialiser</button>
    </div>
  </div>
</template>
