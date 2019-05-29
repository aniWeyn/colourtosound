<template>
  <div class="research py-3" :class="{ grey: research }">
    <ConsentForm v-bind="html"/>
    <Survey/>
    <Progressbar v-if="research"/>
    <colorpicker v-if="showColorPicker"/>
    <div class>
      <Tone v-if="showColorPicker"/>
    </div>
    <Soundpicker v-if="showSoundPicker"/>
    <Feedback v-if="thanks"/>
    <Results v-if="showResults"/>
  </div>
</template>

<script>
import Results from "../components/Results.vue";
import Feedback from "../components/Feedback.vue";
import ConsentForm from "../components/ConsentForm.vue";
import colorpicker from "../components/Colorpicker.vue";
import Soundpicker from "../components/Soundpicker.vue";
import Tone from "../components/Tone.vue";
import Progressbar from "../components/Progressbar.vue";
import consent from "../data/AIC/consentform.json";
import researchData from "../data/AIC/research.json";
import Survey from "../components/Survey.vue";
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
    Feedback,
    Results,
    Soundpicker
  },
  mounted() {
    this.test();
  },
  computed: mapState({
    research: state => state.research,
    thanks: state => state.thanks,
    showResults: state => state.showResults,
    showSoundPicker: state => state.showSoundPicker,
    showColorPicker: state => state.showColorPicker
  }),
  methods: {
    test() {
      this.trial.push(
        this.data.research[0].low2[
          this._.random(this.data.research[0].low2.length -1)
        ]
      );
      this.trial.push(
        this.data.research[1].low3[
          this._.random(this.data.research[1].low3.length -1)
        ]
      );
      this.trial.push(
        this.data.research[2].medium[
          this._.random(this.data.research[2].medium.length -1)
        ]
      );
      this.trial.push(
        this.data.research[2].medium[
          this._.random(this.data.research[2].medium.length -1)
        ]
      );
      this.trial.push(
        this.data.research[3].high5[
          this._.random(this.data.research[3].high5.length -1)
        ]
      );
      this.trial.push(
        this.data.research[4].high6[
          this._.random(this.data.research[4].high6.length -1)
        ]
      );

      if (this.trial && this.trial.length > 0) {
        for(var i = 0; i < this.trial.length; i++){
          this.$store.commit("updateNotesOrdered", this.trial[i].note);
        }
      }

      this.trial.forEach(item => {
        this.trial.push(item);
        this.trial.push(item);
      });

      this.trial = this._.shuffle(this.trial);
      this.trial = this._.concat(
        this.trial[this._.random(this.trial.length)],
        this.trial
      );

      if (this.trial && this.trial.length > 0) {
        for(var j = 0; j < this.trial.length; j++){
            this.$store.commit("updateNotes", this.trial[j].note);
          }
        this.$store.commit("updateAmountOfQuestions", this.trial.length);
      }
    }
  }
};
</script>

<style>
</style>