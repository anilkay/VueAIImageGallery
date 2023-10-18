<template>
    
  components: { PhotoCards },
  components: { PhotoCards },
  components: { PhotoCards },<v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;" v-if="dataIsReady">
        <v-row class="full-height-row">
            
            <photo-cards  v-for="(photo,index) in photoDatas" :key="index" :src="photo.src" :prompt="photo.prompt"> </photo-cards>


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
const dataIsReady = ref(false);
const prompt = ref("aaa");

// Fotoğrafları al
const fetchPhotos = () => {
  photos.value.forEach(element => {
    axios.get(element.data).then((data) => {
      let promptData = data.data.prompt;
      photoDatas.value.push({ prompt: promptData, src: element.src });

      if (photoDatas.value.length === photos.value.length) {
        console.log("All photos fetched!");
      }
    });
  });
};

// Prompt'u al
const fetchPrompt = () => {
  axios.get("/contents/a_man_with_a_gun_in_his_left_hand_and_a_rose_in_his_right_hand__S789114546_St50_G7.5.json")
    .then((data) => {
      prompt.value = data.data.prompt;
      dataIsReady.value = true;
    });
};

// Component mount edildiğinde data fetch işlemleri başlatılır
onMounted(() => {
  fetchPhotos();
  fetchPrompt();
});

</script>

<script>
export default {
  components: {
    PhotoCards
  }
}
</script>
