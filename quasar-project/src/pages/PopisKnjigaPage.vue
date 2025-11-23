<template>
  <div class="q-pa-md">
    <q-table
      title="Knjige"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
  const columns = [
 {
      name:'id',
      label:'Id',
      field:'id',
      align:'left',
      sortable: true,
      style: {
        fontSize:'14px'
      },
      headerStyle: {
        fontSize: '18px'
      }
    },
    {
      name:'naslov',
      label:'Naslov',
      field:'naslov',
      align:'left',
      sortable: true,
      style: {
        fontSize:'14px'
      },
      headerStyle: {
        fontSize: '18px'
      }
    },
    {
      name:'autor',
      label:'Autor',
      field:'autor',
      align:'left',
      sortable: true,
      style: {
        fontSize:'14px'
      },
      headerStyle: {
        fontSize: '18px'
      }
    },
    {
      name:'opis',
      label:'Opis',
      field:'opis',
      align:'left',
      sortable: true,
      style: {
        fontSize:'14px'
      },
      headerStyle: {
        fontSize: '18px'
      }
    },
    {
      name:'slika',
      label:'Slika',
      field:'slika',
      align:'left',
      sortable: true,
      style: {
        fontSize:'14px'
      },
      headerStyle: {
        fontSize: '18px'
      }
    },
    {
      name:'status',
      label:'Status',
      field:'status',
      align:'left',
      sortable: true,
      style: {
        fontSize:'14px'
      },
      headerStyle: {
        fontSize: '18px'
      }
    }
]

const rows = [
  {
    id: 1,
    naslov: 'Na Drini ćuprija',
    autor: 'Ivo Andrić',
    opis: 'Roman koji opisuje život ljudi u Višegradu kroz nekoliko vekova, prikazujući most na Drini kao svedoka istorijskih promena i ljudskih sudbina.',
    slika: 'slika',
    status: 'slobodna',
  },
  {
    id: 2,
    naslov: 'Prokleta avlija',
    autor: 'Ivo Andrić',
    opis: 'Alegorijski roman o zatvoru u Carigradu koji simbolizuje ljudsku sudbinu, pravdu i nepravdu, ispričan kroz susrete pripovedača sa zatvorenicima različitih vera i naroda.',
    slika: 'slika',
    status: 'zauzeta',
  },
  {
    id: 3,
    naslov: 'Seobe',
    autor: 'Miloš Crnjanski',
    opis: 'Epohalni roman o sudbini srpskih vojnika i njihovih porodica tokom Velikog bečkog rata, prožet temama identiteta, patnje i traganja za smislom.',
    slika: 'slika',
    status: 'slobodna',
  }
 
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>