<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md">
      <q-input v-model="korisnickoIme" label="Korisničko ime" filled />
      <q-input v-model="lozinka" label="Lozinka" filled type="password" />

      <q-btn color="primary" label="Potvrdi" @click="login" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const korisnickoIme = ref('')
const lozinka = ref('')

const login = () => {
  console.log('Pokušaj logina:', { korisnickoIme: korisnickoIme.value, lozinka: lozinka.value })
  // Ovdje bi se radio API poziv za provjeru korisnika
}
</script>
