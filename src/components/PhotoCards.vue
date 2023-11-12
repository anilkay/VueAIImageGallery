<template>
    <v-card
    class="mx-auto"
    max-width="512"
  >
    <v-img
      :src="src"
      cover
    ></v-img>

    <v-card-title class="wrap-text">
        {{prompt}}
    </v-card-title >
    <v-card-item> 
     <v-btn
      :href="linkJson"
      color="primary"
      text="JsonLink"
      size="x-large"

      dark
    >
     </v-btn>
     </v-card-item>
    </v-card>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    },
    prompt:{
        type:String,
         default:"Top western road trips"

    },
    linkJson:{
      type:String,
      default:"/contents/Medium_Shot_Photo_of_a_Programmer_writing_code_in_a_Coffee_Shop_with_a_S4248866250_St50_G7.5.json",
      validator: function (value) {
        //ends with .json
        const endsWithJson=value.endsWith(".json")
        const hasValidJsonFileName=value.length>5

        return endsWithJson && hasValidJsonFileName
      }
    }
  }
}
</script>
<style scoped>
.wrap-text {
  white-space: normal !important; /* normal, metnin satırlara bölünmesini sağlar */
}
</style>