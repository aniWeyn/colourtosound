<template>
  <div class="research">
    <ConsentForm v-bind="html" />
    Colorpcker:
    <!--<colorpicker :color="defaultColor" v-model="defaultColor" />-->
  </div>
</template>

<script>
import ConsentForm from "../components/ConsentForm.vue"
//import colorpicker from "../components/Colorpicker.vue"
import consent from "../data/AIC/consentform.json"
export default {
  name: "research",
  data() {
    return {
        html: consent
    }
  },
  components: {
    ConsentForm,
    //colorpicker
  },
};
</script>

<style>

</style>