<template>
    <v-form @submit.prevent="speakIt">
 <v-text-field
  v-model="text"
  label="Text To speach"
  outlined
  dense
  clearable
  placeholder="Type something"
  class="mb-4" ></v-text-field>  
  <v-select 
    v-if="isReady"
    :items="voicesForSelect"
    label="Select a voice"
    v-model="selectedVoice"
    item-title="name"
    item-value="index"
></v-select>
<v-btn type="submit" text="speak">
</v-btn>
    </v-form>
</template>

<script setup>
import {  ref,computed,onMounted ,watch } from 'vue'
import { useSpeechSynthesis } from '@vueuse/core'

//const lang = ref("tr-TR")
const text = ref('Hello, everyone! Good morning!')
const pitch = ref(1)
const rate = ref(1)
const voices = ref([])
const isReady = ref(false)

const selectedVoice = ref(0)

const currentVoice = ref(null)


let speech;

onMounted(function(){
    let synth = window.speechSynthesis
if (synth.getVoices().length === 0) { // If voices are not yet loaded
        synth.onvoiceschanged = () => {
          voices.value = synth.getVoices();
            isReady.value = true
            currentVoice.value=voices.value[selectedVoice.value]
            speech=  useSpeechSynthesis(text, {voice: currentVoice, pitch,rate,})

      
        };
      } else {
        voices.value = synth.getVoices();
        isReady.value = true
        currentVoice.value=voices.value[selectedVoice.value]
        speech=  useSpeechSynthesis(text, {voice: currentVoice, pitch,rate,})
      }
})

//watch selectedVoice

watch(selectedVoice, () => {

    currentVoice.value=voices.value[selectedVoice.value]
    
  
});





const voicesForSelect = computed(function()
{
    console.log(voices.value[selectedVoice.value].name)
    let voicesForSelectList = []
    voices.value.forEach((voice,index) => {
        voicesForSelectList.push({name:voice.name,index:index})
    });
    return  voicesForSelectList
});




console.log(voices.value)
const speakIt= function() {
    //speech.utterance._value.voice = currentVoice.value
  speech.speak()
}

</script>