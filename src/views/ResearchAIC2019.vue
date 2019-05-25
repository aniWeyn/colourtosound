<template>
  <div class="research py-3" :class="{ grey: research }">
    <ConsentForm v-bind="html"/>
    <Survey />
    <Progressbar v-if="research"/>
    <colorpicker v-if="research"/>
    <div class="">
      <Tone v-if="research"/>
    </div>
    <div v-if="thanks">
      Thank you for participation in the test. 
    </div>
  </div>
</template>

<script>
import ConsentForm from "../components/ConsentForm.vue";
import colorpicker from "../components/Colorpicker.vue";
import Tone from "../components/Tone.vue";
import Progressbar from "../components/Progressbar.vue";
import consent from "../data/AIC/consentform.json";
import researchData from "../data/AIC/research2.json";
import Survey from "../components/Survey.vue"
import { mapState } from "vuex";
export default {
  name: "researchAIC",
  data() {
    return {
      html: consent,
      data: researchData
    };
  },
  components: {
    ConsentForm,
    colorpicker,
    Tone,
    Progressbar,
    Survey
  },
  created() {
    this.test();
    //this.$store.commit("updateData", true);
  },
  computed: mapState({
    research: state => state.research,
    thanks: state => state.thanks
  }),
  methods: {
    test() {
      if (this.data && this.data.research.length > 0) {
          this.data.research.forEach(item => {
            if(item.note)
            {
              this.$store.commit("updateNotes", item.note);
            }
            if(item.shuffle)
            {
              this.$store.commit("updateShuffle", item.shuffle);
            }
          });
          this.$store.commit("updateAmountOfQuestions", this.data.research.length -1);
      }
    }
  }
};
</script>

<style>
</style>