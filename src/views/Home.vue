<template>
  <ResumeGenerator :prepare="prepareForm" @submit="submitForm" />
  <BasicForm />
  
</template>

<script setup>
  import ResumeGenerator from '@/components/ResumeGenerator.vue';
  import BasicForm from '@/components/BasicForm.vue';

  const prepareForm= function (data) 
  {
    console.log(data);
  }

  const submitForm= function (data) 
  {
    console.log("SubmitForm")
    console.log(data);
  }

</script>
