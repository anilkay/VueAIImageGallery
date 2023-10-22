<template>
  <ResumeGenerator v-model="formData" :prepare="prepareForm" @submit="submitForm" />
  <BasicForm />
  
</template>

<script setup>
  import ResumeGenerator from '@/components/ResumeGenerator.vue';
  import BasicForm from '@/components/BasicForm.vue';

  import { ref } from 'vue';

  var formData = ref({});

  const prepareForm= function (data) 
  {
    console.log(data);
  }

  const submitForm= function (_data) 
  {
    console.log("SubmitForm")
    console.log(formData.value)
  }

</script>
