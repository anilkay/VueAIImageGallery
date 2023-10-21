<template>
    <v-navigation-drawer
         expand-on-hover
         rail
         location="left"
    >
      <v-list>
       <v-list-item>
          <router-link to="/">
            <v-btn
      color="primary"
      text="Photos & Prompts"
      dark
    >  </v-btn>
  </router-link>

  </v-list-item>
  <v-list-item>
          <router-link to="/test">
            <v-btn
      color="primary"
      text="Test"
      dark
    >  </v-btn>
  </router-link>

  </v-list-item>

      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    
}
</script>