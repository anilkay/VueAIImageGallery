<template>
  <v-main class="d-flex align-center justify-center class= fill-height" style="min-height: 300px;padding: 4%">
    <v-row>
      <v-col cols="12">
  <ResumeGenerator :sync="true" v-model="formData" :prepare="prepareForm" @submit="submitForm" />
      </v-col>
  <v-col cols="12">
  <BasicForm />
  </v-col>
</v-row>
</v-main>
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
    console.log(formData.value.startDate)
    console.log(JSON.stringify(formData.value))
  }

</script>
