<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md">
      <q-input v-model="ime" label="Ime" filled />
      <q-input v-model="prezime" label="Prezime" filled />
      <q-input v-model="email" label="Email" filled type="email" />
      <q-input v-model="korisnickoIme" label="Korisničko ime" filled />
      <q-input v-model="lozinka" label="Lozinka" filled type="password" />

      <q-btn color="primary" label="Potvrdi" @click="registriraj" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const ime = ref('')
const prezime = ref('')
const email = ref('')
const korisnickoIme = ref('')
const lozinka = ref('')

const registriraj = () => {
  const korisnik = {
    ime: ime.value,
    prezime: prezime.value,
    email: email.value,
    korisnickoIme: korisnickoIme.value,
    lozinka: lozinka.value
  }

  console.log('Registrirani korisnik:', korisnik)
  // Ovdje bi išao API poziv za registraciju
}
</script>
