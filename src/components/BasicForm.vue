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

      <ListElement name="list_of_actions">
        <template   #default="{ index }">
        <TextElement  :name="index" placeholder="action" />
      </template>
        </ListElement>


        <ListElement name="list_of_milestones">
        <template   #default="{ index }">
          <ObjectElement :name="index" :label="`Milestone #${index+1}`"  >
        <TextElement  name="milestoneName" placeholder="milestone" />
        <DateElement name="milestoneDate" />
      </ObjectElement>
      </template>
        </ListElement>

        </GroupElement>   
      <ButtonElement
      name="submit"
      add-class="mt-2"
      :submits="true"
      
    >Submit </ButtonElement>

    </Vueform>

</template>
<script setup>
import Swal from 'sweetalert2'

import { ref } from 'vue';

var formData = ref({});


const handleSubmit = (data) => {
  console.log(data)
  //let strl=JSON.stringify(data)
  console.log(formData.value)
  console.log(formData.value.firstname)
  console.log(formData.value.lastname)
  Swal.fire({
  title: 'Success!',
  text: JSON.stringify(formData.value),
  icon: 'success',
})
}


</script>