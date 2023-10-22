<template>
    <Vueform v-model="formData" :sync="true"   form-key="nE8e4wY5mcn5q1nTNakf"  endpoint="" @submit="handleSubmit" >
        <GroupElement
      name="personal_information"
      label="Personal information"
    >
        <TextElement
        name="firstname"
        placeholder="First name"
        rules="required"
        :columns="6"
      />
      <TextElement
        name="lastname"
        placeholder="Last name"
        rules="required"
        :columns="6"
      />
      <DateElement name="date" />

        </GroupElement>   
      <ButtonElement
      name="submit"
      add-class="mt-2"
      :submits="true"
      
    >Submit </ButtonElement>

    </Vueform>

</template>
<script setup>

import { ref } from 'vue';

var formData = ref({});

const handleSubmit = (data) => {
  console.log(data)
  //let strl=JSON.stringify(data)
  console.log(formData.value)
  console.log(formData.value.firstname)
  console.log(formData.value.lastname)
}


</script>