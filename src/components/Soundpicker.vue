<template>
  <div class="container-fluid p-3">
    <h3 v-if="showInstructions" class="d-flex justify-content-center">Instructions</h3>
    <p
      v-if="showInstructions"
      class="d-flex justify-content-center"
    >Please choose a sound which fits best with a displayed colour.</p>
    <div class="d-flex justify-content-center p-3">
      <div class="square" :style="{'background-color': color}"></div>
    </div>
    <p
      v-if="showInstructions"
      class="d-flex justify-content-center"
    >To change sound please move range sliders.</p>
    <div class="col-md-4 offset-md-4">
      <div class="p-3">
        <vue-slider
          :tooltip="'none'"
          v-model="value"
          :data="pianoNotes"
          :marks="false"
          :process-style="{ backgroundColor: 'hsl(0,0%,55%)'}"
          @change="unlockNext(value)"
        />
      </div>
    </div>
    <p
      v-if="showInstructions"
      class="d-flex justify-content-center"
    >If you feel ready click next to start the experiment!</p>
    <div class="d-flex justify-content-between container-fluid">
      <button @click="startTone()" class="btn btn btn-outline-secondary">
        <i class="fas fa-play"></i>
      </button>
      <button class="btn btn-outline-secondary" @click="updateArray()" :disabled="buttonNext">Next</button>
    </div>
  </div>
</template>
<script>
import Tone from "tone";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
export default {
  name: "colorpicker",
  components: {
    VueSlider
  },
  data() {
    return {
      pianoNotes: [
        "C2",
        "D2",
        "E2",
        "F2",
        "G2",
        "A2",
        "B2",
        "C3",
        "D3",
        "E3",
        "F3",
        "G3",
        "A3",
        "B3",
        "C4",
        "D4",
        "E4",
        "F4",
        "G4",
        "A4",
        "B4",
        "C5",
        "D5",
        "E5",
        "F5",
        "G5",
        "A5",
        "B5",
        "C6",
        "D6",
        "E6",
        "F6",
        "G6",
        "A6",
        "B6"
      ],
      value: "C2",
      color: "hsl(0,0%,55%)"
    };
  },
  methods: {
    unlockNext(sound) {
      //this.$store.commit("blockButtonNext", false)
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease(sound, "8n");
    },
    startTone() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease(this.value, "8n");
    },
    updateArray() {
      if (this.notesArrayIndex + 1 <= this.notesArrayLength) {
        if (this.showInstructions === false) {
          let firebase = db;
          firebase.ref("/users/" + this.userAuth.uid + '/colourtosound/').push({
            note: this.notesArray[this.notesArrayIndex].notes,
            color: this.color,
            hue: this.hue,
            saturation: this.saturation,
            lightness: this.lightness
          });
          
          this.answers.note = this.notesArray[this.notesArrayIndex].notes,
          this.answers.color = this.color
          this.answers.hue = this.hue
          this.answers.saturation = this.saturation
          this.answers.lightness = this.lightness
          this.$store.commit("updateAnswersNote", this.answers);
        }
      }
        if (this.notesArrayIndex + 1 < this.notesArrayLength) {
        this.$store.commit("blockButtonNext", true);
        this.$store.commit("updateNotesArrayIndex");
        this.$store.commit("updateColor", "hsl(0, 0%, 50%)");
        this.$store.commit("updateSaturation", 0);
        this.$store.commit("updateLightness", 50);
        this.$store.commit("updateHue", 0);
        this.$store.commit("updateshowInstructions");
        this.startTone();
      } else {
        this.$store.commit("updateSoundPicker", false);
        this.$store.commit("updateThanks", true);
      }
    }
  },
  computed: {
    showInstructions() {
      return this.$store.state.showInstructions;
    }
  }
};
</script>

<style scss>
.custom-dot {
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: gray;
  transition: all 0.3s;
}
.custom-dot:hover {
  transform: rotateZ(45deg);
  background-color: pink;
}
.custom-dot.focus {
  background-color: pink;
}
</style>
