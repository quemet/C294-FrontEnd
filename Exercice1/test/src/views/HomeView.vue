<script setup>
import { ref } from 'vue'

let counter = ref({ counter: 5 })

function increment() {
  counter.value.counter += 1
}

function decrement() {
  counter.value.counter -= 1
}

function reset() {
  counter.value.counter = 0
}
</script>

<template>
  <div>
    <h1>Compteur dynamique</h1>
    <p>La valeur dynamique du compteur est {{ counter.counter }}</p>
    <div>
      <button @click="increment">Incrémenter</button>
      <button @click="decrement">Décrémenter</button>
      <button @click="reset">Réinitialiser</button>
    </div>
  </div>
</template>
