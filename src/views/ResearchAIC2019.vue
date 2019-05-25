<template>
  <div class="research py-3" :class="{ grey: research }">
    <ConsentForm v-bind="html"/>
    <Survey />
    <Progressbar v-if="research"/>
    <colorpicker v-if="research"/>
    <div class="">
      <Tone v-if="research"/>
    </div>
    <Feedback v-if="thanks" />
  </div>
</template>

<script>
import Feedback from "../components/Feedback.vue";
import ConsentForm from "../components/ConsentForm.vue";
import colorpicker from "../components/Colorpicker.vue";
import Tone from "../components/Tone.vue";
import Progressbar from "../components/Progressbar.vue";
import consent from "../data/AIC/consentform.json";
import researchData from "../data/AIC/research.json";
import Survey from "../components/Survey.vue"
import { mapState } from "vuex";
export default {
  name: "researchAIC",
  data() {
    return {
      html: consent,
      data: researchData,
      trial: []
    };
  },
  components: {
    ConsentForm,
    colorpicker,
    Tone,
    Progressbar,
    Survey,
    Feedback
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
      this.trial.push(this.data.research[0].low2[this._.random(this.data.research[0].low2.length)])
      this.trial.push(this.data.research[1].low3[this._.random(this.data.research[1].low3.length)])
      this.trial.push(this.data.research[2].medium[this._.random(this.data.research[2].medium.length)])
      this.trial.push(this.data.research[2].medium[this._.random(this.data.research[2].medium.length)])
      this.trial.push(this.data.research[3].high5[this._.random(this.data.research[3].high5.length)])
      this.trial.push(this.data.research[4].high6[this._.random(this.data.research[4].high6.length)])
      
      //this.trial.forEach(item => {
        //this.trial.push(item)
        //this.trial.push(item)
      //})

      this.trial.push(this.trial[this._.random(this.trial.length)])
      this.trial = this._.shuffle(this.trial)

      if (this.trial && this.trial.length > 0) {
          this.trial.forEach(item => {
            if(item.note)
            {
              this.$store.commit("updateNotes", item.note);
            }
          });
          this.$store.commit("updateAmountOfQuestions", this.trial.length);
      }
    }
  }
};
</script>

<style>
</style>