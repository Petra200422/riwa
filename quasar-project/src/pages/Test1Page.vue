<template>
<div class="q-pa-md q-gutter-sm">
    <q-btn push color="white" text-color="primary" label="Unread Mails">
      <q-badge color="orange" v-model="unread" floating>{{ unread }}</q-badge>
    </q-btn>

    <q-btn dense color="purple" round icon="email" class="q-ml-md">
      <q-badge color="red" v-model="open" floating>{{ open }}</q-badge>
    </q-btn>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
   <q-card class="my-card bg-secondary text-white" v-for="item in msg" :key="item">
      <q-card-section>
        <div class="text-h6">{{ item.title }}</div>
        <div class="text-subtitle2">{{ item.author }}</div>
      </q-card-section>

      <q-card-section>
        {{ item.text }}
      </q-card-section>

      <q-separator dark />
      <q-card-actions>
        <q-btn flat @click="openMsg()">Open</q-btn>
        <q-btn flat @click="deleteMsg()">Delete</q-btn>
      </q-card-actions>
    </q-card>
</div>

<div class="q-pa-md row items-start q-gutter-md">
  <q-input v-model="title" label="Title" />
  <q-input v-model="author" label="Author" />
  <q-input v-model="text" label="Text" />
  <q-btn flat @click="save()"> Save</q-btn>
</div>
</template>

<script setup>
import { ref } from 'vue'
const msg = [
  {
    title:'Changing planet',
    author: 'by John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
  {
    title:'New planet',
    author: 'Mark Lock',
    text: 'Lorem ipsum.'
}, 
  {
    title:'New wordl',
    author: 'Harry Key',
    text: 'Lorem.'
}
]

 let unread = ref(22)
 let open = ref(4) 

 let title= ref('')
 let author= ref('')
 let text= ref('')

 function openMsg(){
    if(open.value>0){
    open.value -= 1 
  console.log("open "+open.value)
}}


function deleteMsg(){
    if(unread.value>0){
    unread.value -= 1
  console.log("delete"+unread.value)
}}

function save(){
  msg.push({title:title.value, author:author.value, text:text.value})
  console.log(msg)
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>