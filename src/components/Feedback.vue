<template>
  <div class="container p-3">
    <h5>Thank you for participation in the test!</h5>
    <p>Before you will see your results please give short feedback about the study and fill post study survey.</p>
    <section>
      <div v-for="(question, indexQ) in survey" :key="indexQ" class="p-3">
        <h5>{{question.question}}</h5>
        <div v-for="(answer, index) in question.answers" :key="index" class="form-check">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :name="inlineRadio+indexQ"
              :id="inlineRadio+indexQ+index"
              :value="answer.value"
              v-model="question.selected"
              @click="addAnswer(indexQ, answer.value)"
            >
            <label class="form-check-label" :for="inlineRadio+indexQ+index">{{answer.text}}</label>
          </div>
        </div>
      </div>
      <h5>If you have any comments about the study please share them with me:</h5>
      <div class="input-group p-3">
        <textarea class="form-control" aria-label="With textarea" v-model="text"></textarea>
      </div>
      <div class="d-flex justify-content-end container-fluid">
        <button class="btn btn-outline-secondary" @click="next()">Next</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import db from "../data/AIC/firebase.js";
import firebase from "firebase";
export default {
  name: "feedback",
  props: ["consent"],
  data() {
    return {
      selectedArray: [
        { question: "0", answer: "" },
        { question: "1", answer: "" },
        { question: "2", answer: "" },
        { question: "3", answer: "" },
        { question: "4", answer: "" },
        { question: "5", answer: "" },
        { question: "6", answer: "" },
        { question: "7", answer: "" }
      ],
      inlineRadio: "inlineRadio",
      text: "",
      survey: [
        {
          question: "Is the length of study appropriate?",
          answers: [
            { value: "1", text: "1 (Too short)" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5 (Too long)" },
            { value: "0", text: "No opinion" }
          ],
          selected: ""
        },
        {
          question: "Could you hear all sounds?",
          answers: [
            { value: "1", text: "1 (I couldn't hear sounds)" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5 (I could hear all sounds)" },
            { value: "0", text: "No opinion" }
          ],
          selected: ""
        },
        {
          question: "How bright is the screen of your device?",
          answers: [
            { value: "1", text: "1 (Very dark)" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5 (Very bright)" },
            { value: "0", text: "I don't know" }
          ],
          selected: ""
        },
        {
          question: "What device are you using during study participation?",
          answers: [
            { value: "1", text: "Tablet" },
            { value: "2", text: "Smartphone" },
            { value: "3", text: "Personal computer" },
            { value: "4", text: "Other" }
          ],
          selected: ""
        },
        {
          question:
            "Are you listening sounds of the study on speakers or headphones?",
          answers: [
            { value: "1", text: "My device speakers" },
            { value: "2", text: "Headphones" },
            { value: "3", text: "External speakers" },
            { value: "4", text: "Other" }
          ],
          selected: ""
        },
        {
          question: "Are suffering from any hearing loss?",
          answers: [
            { value: "1", text: "No (and I checked it with doctor)" },
            { value: "2", text: "No (but I didn't check it with doctor)" },
            { value: "3", text: "Yes (and I checked it with doctor)" },
            { value: "4", text: "Yes (but I didn't check it with doctor)" },
            { value: "5", text: "I might" },
            { value: "0", text: "I don't know" }
          ],
          selected: ""
        },
        {
          question:
            "Are you experiencing tinnitus (unexpected high-pitched ringing or hissing sound or low pitched sound)?",
          answers: [
            { value: "1", text: "Yes" },
            { value: "2", text: "No" },
            { value: "3", text: "I might" },
            { value: "0", text: "I don't know" }
          ],
          selected: ""
        }
      ]
    };
  },
  methods: {
    next() {
      let firebase = db;
      this.selectedArray[7].answer = this.text;
      firebase.ref("/newusers/" + this.userAuth.uid + "/feedback/").push({
        survey: this.selectedArray, 
        width: screen.width,
        height: screen.height,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
        availHeight: screen.availHeight,
        availWidth: screen.availWidth,
        startTime: this.$store.state.researchStartTime,
        endTime: Date.now(),
        soundToColourStartTime: this.$store.state.soundToColourStartTime,
        soundToColourStopTime: this.$store.state.soundToColourStopTime,
        colourToSoundStartTime: this.$store.state.colourToSoundStartTime,
        colourToSoundStopTime: this.$store.state.colourToSoundStopTime,
      });
      this.$store.commit("updateThanks", false);
      this.$store.commit("updateResults", true);
    },
    addAnswer(question, answer) {
      if (question === 0) {
        this.selectedArray[0].answer = answer;
      }
      if (question === 1) {
        this.selectedArray[1].answer = answer;
      }
      if (question === 2) {
        this.selectedArray[2].answer = answer;
      }
      if (question === 3) {
        this.selectedArray[3].answer = answer;
      }
      if (question === 4) {
        this.selectedArray[4].answer = answer;
      }
      if (question === 5) {
        this.selectedArray[5].answer = answer;
      }
      if (question === 6) {
        this.selectedArray[6].answer = answer;
      }
      if (question === 7) {
        this.selectedArray[7].answer = answer;
      }
    }
  },
  computed: mapState({
    thanks: state => state.thanks
  }),
  created() {
    let self = this;
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userAuth = user;
      }
    });
  }
};
</script>

<style>
</style>
