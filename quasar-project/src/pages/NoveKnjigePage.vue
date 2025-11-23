<template>
  <q-page padding>
      <div class="q-pa-md row items-start q-gutter-md">
         <q-card class="my-card">
          <img src="~assets/knjiga1.jpg">

          <q-card-section>
            <div class="text-h6">Na Drini ćuprija</div>
            <div class="text-subtitle2">Ivo Andrić</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem1 }}
          </q-card-section>
        </q-card>   
         <q-card class="my-card">
          <img src="~assets/knjiga2.jpg">

          <q-card-section>
            <div class="text-h6">Prokleta avilja</div>
            <div class="text-subtitle2">Ivo Andrić</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem2}}
          </q-card-section>
        </q-card>
         <q-card class="my-card">
          <img src="~assets/knjiga3.webp">

          <q-card-section>
            <div class="text-h6">Seobe</div>
            <div class="text-subtitle2">Miloš Crnjanski</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem3 }}
          </q-card-section>
        </q-card>
    
    </div>
  </q-page>
</template>

<script>
export default {
  setup () {
    return {
      lorem1: 'Roman koji opisuje život ljudi u Višegradu kroz nekoliko vekova, prikazujući most na Drini kao svedoka istorijskih promena i ljudskih sudbina.',
      lorem2: 'Alegorijski roman o zatvoru u Carigradu koji simbolizuje ljudsku sudbinu, pravdu i nepravdu, ispričan kroz susrete pripovedača sa zatvorenicima različitih vera i naroda.',
      lorem3: 'Epohalni roman o sudbini srpskih vojnika i njihovih porodica tokom Velikog bečkog rata, prožet temama identiteta, patnje i traganja za smislom.',
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
