<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="src"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
        {{prompt}}
    </v-card-title>
    </v-card>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    },
    prompt:{
        type:String,
        required:false,
         default:"Top western road trips"

    }
  }
}
</script>