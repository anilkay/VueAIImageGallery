<template>
  <ResumeGenerator :prepare="prepareForm" :handleSubmit="submitForm" />
</template>

<script setup>
  import ResumeGenerator from '@/components/ResumeGenerator.vue';

  const prepareForm= function (data) 
  {
    console.log(data);
  }

  const submitForm= function (data) 
  {
    console.log(data);
  }

</script>
