<template>
        <v-main class="d-flex align-center justify-center class= fill-height" style="min-height: 300px;padding: 4%">
            <v-row>
<v-col>
<Splide :options="splideOptions">
    <SplideSlide v-for="(image,index) in props.images" :key="index">
        <v-img
      :src="image.src"
      cover
    ></v-img>
    </SplideSlide>
</Splide>
</v-col>
            </v-row>
        </v-main>
</template>

<script setup>
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';

import { ref, defineProps/*toRefs*/ } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const props =  defineProps({
      images: Array,
   })


const splideOptions = ref({
      type: 'slide',
      gap: 10,
      autoplay: true,
      perPage : 3,
      rewind : true,
    });
</script>
