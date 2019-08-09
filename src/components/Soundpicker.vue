<template>
  <div class="container-fluid p-3">
    <h3 v-if="showInstructions" class="d-flex justify-content-center">Instructions</h3>
    <p v-if="showInstructions" class="d-flex justify-content-center"
    >Please choose a sound which fits best with a displayed colour.</p>
    <p v-if="showInstructions" class="d-flex justify-content-center"
    >This answer will not be saved.</p>
    <div class="d-flex justify-content-center p-3">
      <div class="square" :style="{'background-color': this.answersArray[this.notesArrayIndex].color}"></div>
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
import db from "../data/AIC/firebase.js";
import firebase from "firebase";
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
      color: "hsl(0,0%,55%)",
      answersArray: [],
      answersTwo: [],
      startTime: "",
      stopTime: ""
    };
  },
  methods: {
    unlockNext(sound) {
      this.$store.commit("blockButtonNext", false);
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
          firebase.ref("/bugfix/" + this.userAuth.uid+ '/colourtosound/').push({
            note: this.value,
            color: this.answersArray[this.notesArrayIndex].color,
            startTime: this.startTime,
            stopTime: Date.now()
          });
          
          this.answersTwo.note = this.value,
          this.answersTwo.color = this.answersArray[this.notesArrayIndex].color
          this.$store.commit("updateAnswersTwoNote", this.answersTwo);
        }
      }
        if (this.notesArrayIndex + 1 < this.notesArrayLength) {
        this.value = "C2"
        this.$store.commit("blockButtonNext", true);
        this.$store.commit("updateNotesArrayIndex");
        this.$store.commit("updateshowInstructions", false);
        this.startTime = Date.now()
      } else {
        this.$store.commit("updateSoundPicker", false);
        this.$store.commit("updateThanks", true);
        this.$store.commit("updateResearch", false);
        this.$store.commit("updateColourToSoundStopTime");
      }
    }
  },
  computed: {
    showInstructions() {
      return this.$store.state.showInstructions;
    },
    answers() {
      return this.$store.state.answers;
    },
    buttonNext() {
      return this.$store.state.blockButtonNext;
    },
    notesArrayIndex() {
      return this.$store.state.notesArrayIndex;
    },
    notesArrayLength() {
      return this.$store.state.notesArrayLength;
    }
  },
  created() {
    this.answersArray = this._.concat(this.answers, this.answersArray)
    //yellow
    this.answersArray.push({color: "hsl(60, 100%, 50%)"}) 
    this.answersArray.push({color: "hsl(60, 50%, 50%)"})
    this.answersArray.push({color: "hsl(60, 100%, 80%)"})
    this.answersArray.push({color: "hsl(60, 100%, 20%)"})
    //red
    this.answersArray.push({color: "hsl(0, 100%, 50%)"}) 
    this.answersArray.push({color: "hsl(0, 50%, 50%)"})
    this.answersArray.push({color: "hsl(0, 100%, 80%)"})
    this.answersArray.push({color: "hsl(0, 100%, 20%)"})
    //green
    this.answersArray.push({color: "hsl(120, 100%, 50%)"})
    this.answersArray.push({color: "hsl(120, 50%, 50%)"})
    this.answersArray.push({color: "hsl(120, 100%, 80%)"})
    this.answersArray.push({color: "hsl(120, 100%, 20%)"})
    //blue
    this.answersArray.push({color: "hsl(240, 100%, 50%)"})
    this.answersArray.push({color: "hsl(240, 50%, 50%)"})
    this.answersArray.push({color: "hsl(240, 100%, 80%)"})
    this.answersArray.push({color: "hsl(240, 100%, 20%)"})
    //black
    this.answersArray.push({color: "hsl(0, 0%, 0%)"})
    //white
    this.answersArray.push({color: "hsl(0, 100%, 100%)"})
    this.answersArray = this._.shuffle(this.answersArray)

    this.answersArray = this._.concat(this.answersArray[this._.random(this.answersArray.length)], this.answersArray)
    this.$store.commit("updateAmountOfQuestions", this.answersArray.length);

    let self = this;
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userAuth = user;
      }
    });

    this.$store.commit("updateColourToSoundStartTime");
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
