<template>
     <v-main class="d-flex align-center justify-center class= fill-height"
     style="min-height: 300px;padding: 4%">

 <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ values }">
      <label>Username</label>
      <Field name="username" type="text" label="UserName" value="" /> 
      <ErrorMessage name="username" />
      <label>Password</label>
      <Field name="password" type="password" label="Password" value="" /> 
      <ErrorMessage name="password" />
      <label>Description</label>
      <Field name="description" type="text" label="Description" value="" />
      <ErrorMessage name="description" />

      <button class="button">Submit</button>
    </Form>
</v-main>
</template>
<script setup>
import { useForm } from 'vee-validate';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const { values } = useForm();

const schema = yup.object({
  username: yup.string().required().email(),
  password: yup.string().required().min(8),
  description:yup.string()
  .nullable(true)
  .transform((curr, orig) => (orig === "" ? null : curr))
  //Source: http://localhost:3000/optionalvalidation
  .min(6)
 
});


const onSubmit=function(values){
    console.log(values)
    alert("Submitted");
}

</script>
<style>
/* 
This styles generated from Codellama 7B
with ollama. 
*/
form {
  padding: 4px;
  margin: 3px;
  background-color: #fff;
}

label {
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #555;
}

input, select, textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #fff;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border: 2px solid #337ab7;
  box-shadow: 0 0 8px rgba(51, 122, 183, 0.6);
}

.invalid input, .invalid select, .invalid textarea {
  border: 1px solid #c00;
  background-color: #ffdada;
  color: #c00;
}

.invalid label {
  color: #c00;
}

.button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>