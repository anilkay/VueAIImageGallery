<template>
    
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer
         expand-on-hover
         rail
         location="left"
    >
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
        <v-list-item title="Navigation drawer"></v-list-item>
        <v-list-item title="Navigation drawer"></v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;padding: 4%">
      

        <v-row>
            
            <photo-cards  v-for="(photo,index) in photoDatas" :key="index" :src="photo.src" :prompt="photo.prompt" :linkJson="photo.linkJson"> </photo-cards>


        </v-row>
    </v-main>
  </v-layout>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PhotoCards from "./PhotoCards.vue";
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

// Prompt'u al


// Component mount edildiğinde data fetch işlemleri başlatılır
onMounted(() => {
  fetchPhotos();
});

</script>

<script>
export default {
  components: {
    PhotoCards
  }
}
</script>
