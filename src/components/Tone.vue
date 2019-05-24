<template>
  <div class="d-flex justify-content-between container-fluid">
      <button @click="startTone()" class="btn btn btn-outline-secondary">
        <i class="fas fa-play"></i>
      </button>
      <button class="btn btn-outline-secondary" @click="updateArray()" :disabled="buttonNext">Next</button>
  </div>
</template>

<script>
import db from "../data/AIC/firebase.js";
import firebase from "firebase";
import Tone from "tone";
import { mapState } from "vuex";
export default {
  name: "tone",
  data() {
    return {
      userAuth: {
        isAnonymous: String,
        uid: String
      }
    };
  },
  created() {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease(
      this.notesArray[this.notesArrayIndex].notes,
      "8n"
    );
    let self = this;
    //debugger;
    firebase.auth().signInAnonymously();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userAuth = user;
      }
    });
  },
  methods: {
    startTone() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease(
        this.notesArray[this.notesArrayIndex].notes,
        "8n"
      );
    },
    updateArray() {
      if (this.notesArrayIndex + 1 < this.notesArrayLength) {
        if (this.showInstructions === true) {
          let firebase = db;
          firebase.ref("/users/" + this.userAuth.uid).push({
            note: this.notesArray[this.notesArrayIndex].notes,
            color: this.color,
            hue: this.hue,
            saturation: this.saturation,
            lightness: this.lightness
          });
        }
        this.$store.commit("blockButtonNext", true);
        this.$store.commit("updateNotesArrayIndex");
        this.$store.commit("updateColor", "hsl(0, 0%, 50%)");
        this.$store.commit("updateSaturation", 0);
        this.$store.commit("updateLightness", 50);
        this.$store.commit("updateHue", 0);
        this.$store.commit("updateHue", 0);
        this.$store.commit("updateAnswersNote", true);
        this.$store.commit("updateshowInstructions");
        this.startTone();
      } else {
        this.$store.commit("updateThanks");
        this.$store.commit("updateResearch", false);
      }
    }
  },
  computed: mapState({
    notesArrayIndex: state => state.notesArrayIndex,
    notesArrayLength: state => state.notesArrayLength,
    notesArray: state => state.notes,
    buttonNext: state => state.blockButtonNext,
    color: state => state.color,
    hue: state => state.hue,
    saturation: state => state.saturation,
    lightness: state => state.lightness,
    showInstructions: state => state.showInstructions
  })
};
</script>

<style>
</style>
