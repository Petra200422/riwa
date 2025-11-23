<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md">

      <q-input
        v-model="pojam"
        label="Unesite pojam za pretraživanje"
        filled
      />

      <div class="row q-gutter-sm">
        <q-checkbox v-model="pretraziPoAutoru" label="Pretraži po autoru" />
        <q-checkbox v-model="pretraziPoNaslovu" label="Pretraži po naslovu" />
      </div>

      <q-btn color="primary" label="Traži" @click="traziKnjige" />

      <q-table
        v-if="rezultati.length"
        :rows="rezultati"
        :columns="kolone"
        row-key="id"
        class="q-mt-md"
        title="Rezultati pretraživanja"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const pojam = ref('')
const pretraziPoAutoru = ref(false)
const pretraziPoNaslovu = ref(false)

const rezultati = ref([])
const kolone = [
  { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
  { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
  { name: 'opis', label: 'Opis', field: 'opis', align: 'center' },
  { name: 'slika', label: 'Slika', field: 'slika', align: 'center' },
  { name: 'status', label: 'Status', field: 'status', align: 'center' },
]


// Dummy podaci (inače bi došli iz API-ja)
const sveKnjige = [
  {id: 1, naslov: 'Na Drini ćuprija', autor: 'Ivo Andrić', opis: 'Roman koji opisuje život ljudi u Višegradu kroz nekoliko vekova, prikazujući most na Drini kao svedoka istorijskih promena i ljudskih sudbina.', slika: 'slika', status: 'slobodna'},
  {id: 2, naslov: 'Prokleta avlija', autor: 'Ivo Andrić', opis: 'Alegorijski roman o zatvoru u Carigradu koji simbolizuje ljudsku sudbinu, pravdu i nepravdu, ispričan kroz susrete pripovedača sa zatvorenicima različitih vera i naroda.', slika: 'slika', status: 'zauzeta'},
  {id: 3, naslov: 'Seobe', autor: 'Miloš Crnjanski', opis: 'Epohalni roman o sudbini srpskih vojnika i njihovih porodica tokom Velikog bečkog rata, prožet temama identiteta, patnje i traganja za smislom.', slika: 'slika', status: 'slobodna'}
];

const traziKnjige = () => {
  if (!pojam.value) return

  rezultati.value = sveKnjige.filter(knjiga => {
    const pojamLower = pojam.value.toLowerCase()
    return (
      (pretraziPoAutoru.value && knjiga.autor.toLowerCase().includes(pojamLower)) ||
      (pretraziPoNaslovu.value && knjiga.naslov.toLowerCase().includes(pojamLower))
    )
  })
}
</script>
