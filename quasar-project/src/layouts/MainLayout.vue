<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-bold"> Quasar Aplikacija Knjiznica </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list> 
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Početna',
    caption: '',
    icon: 'home',
    link: '#/',
  },
  {
    title: 'Nove knjige',
    caption: '',
    icon: 'menu_book',
    link: '#/noveKnjige',
  },
   {
    title: 'Popis knjiga',
    caption: '',
    icon: 'book',
    link: '#/popisKnjiga',
  },
   {
    title: 'Pretraživanje',
    caption: '',
    icon: 'search',
    link: '#/pretrazivanje',
  },
   {
    title: 'Lokacija',
    caption: '',
    icon: 'location_on',
    link: '#/lokacija',
  },
  {
    title: 'Login',
    caption: '',
    icon: 'login',
    link: '#/login',
  },
    {
    title: 'Registracija',
    caption: '',
    icon: 'how_to_reg',
    link: '#/registracija',
  },
    {
    title: 'Unos Knjige',
    caption: '',
    icon: 'auto_stories',
    link: '#/unosKnjige',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
