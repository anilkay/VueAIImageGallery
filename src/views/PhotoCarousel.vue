<template>
<PhotoCarouselComponent :images="photoDatas" />
</template>
<script setup>
import {  ref, onMounted } from 'vue';
import axios from 'axios';
import PhotoCarouselComponent from '@/components/PhotoCarouselComponent.vue';
import photoData from "../assets/photoData.json";

const photos = ref(photoData.photos);

const photoDatas = ref([]);


const fetchPhotos = () => {
  photos.value.forEach(element => {
    axios.get(element.data).then((data) => {
      let promptData = data.data.prompt;
      photoDatas.value.push({ prompt: promptData, src: element.src,linkJson:element.data });

     
    });
  });
};

onMounted(() => {
  fetchPhotos();
});

</script>