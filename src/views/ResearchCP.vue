<template>
  <div class="research">
    <ConsentForm v-bind="html"/>
  </div>
</template>

<script>
import ConsentForm from "../components/ConsentForm.vue"
import consent from "../data/CP/consentform.json"
export default {
  name: "research",
  data() {
    return {
        html: consent
    }
  },
  components: {
    ConsentForm
  },
};
</script>

<style>

</style>

