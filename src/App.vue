<template>
  <v-layout class="rounded rounded-md">
    <navigation-component></navigation-component>
  <router-view />
</v-layout>
</template>

<script setup>
  import NavigationComponent from './components/NavigationComponent.vue';
</script>
