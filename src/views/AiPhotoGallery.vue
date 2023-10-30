<template>
  <base-layout>

  <v-row>
            
   <v-col cols="4"  v-for="(photo,index) in photoDatas" :key="index">
  <photo-cards   :src="photo.src" :prompt="photo.prompt" :linkJson="photo.linkJson"> </photo-cards>
  
</v-col>
</v-row>


  </base-layout>
</template>

<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PhotoCards from "@/components/PhotoCards.vue";
import photoData from "../assets/photoData.json";

// Reaktif veri tanımlamaları
const photos = ref(photoData.photos);
const photoDatas = ref([]);

// Fotoğrafları al
const fetchPhotos = () => {
  photos.value.forEach(element => {
    axios.get(element.data).then((data) => {
      let promptData = data.data.prompt;
      photoDatas.value.push({ prompt: promptData, src: element.src,linkJson:element.data });

      if (photoDatas.value.length === photos.value.length) {
        console.log("All photos fetched!");
      }
    });
  });
};



onMounted(() => {
  fetchPhotos();
});

</script>