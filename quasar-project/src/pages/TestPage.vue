<template>
  <q-page padding>
    <!-- content -->
     <h1>{{ poruka }}</h1>
     <p v-html="tijelo"></p>
     <p v-html="htmlText"></p>
     <p v-html="htmlText"></p>

     <p v-for="item in days" :key="item">
      <button v-if="item=='Ponedjeljak'">
        {{ item }}*
      </button>
      <button v-else-if="item=='Utorak'" v-show="false">
        {{ item }}
      </button>
      <button v-else>
        {{ item }}
      </button>
     </p>

  </q-page>
</template>

<script setup>
//
const poruka = "Test page"
const tijelo = "Tekst na stranici"
const htmlText = "<p><b>Formatirani tekst</b> na stranici </p>"
const days = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja']
</script>
