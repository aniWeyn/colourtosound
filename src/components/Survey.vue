<template>
  <div class="container p-3" v-if="surveyVisible">
    <section >
      <h3>Survey</h3>
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
  name: "consentForm",
  props: ["consent"],
  data() {
    return {
      selectedArray: [
        { question: "0", answer: "" },
        { question: "1", answer: "" },
        { question: "2", answer: "" },
        { question: "3", answer: "" }
      ],
      inlineRadio: "inlineRadio",
      survey: [
        {
          question:
            "How much experience do you have with singing or playing musical instruments?",
          answers: [
            { value: "1", text: "1 (None)" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5 (Professional musician)" },
            { value: "0", text: "No opinion" }
          ],
          selected: ""
        },
        {
          question: "How much formal training have you had in colour?",
          answers: [
            { value: "1", text: "1 (None)" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5 (Working professionally with colours)" },
            { value: "0", text: "No opinion" }
          ],
          selected: ""
        },
        {
          question:
            "Do you experience colour while you are listening to music?",
          answers: [
            { value: "1", text: "1 (Never)" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5 (Always)" },
            { value: "0", text: "No opinion" }
          ],
          selected: ""
        },
        {
          question: "Do you experience sound while you are seeing a colour?",
          answers: [
            { value: "1", text: "1 (Never)" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5 (Always)" },
            { value: "0", text: "No opinion" }
          ],
          selected: ""
        }
      ]
    };
  },
  methods: {
    next() {
      let firebase = db;
      firebase.ref("/users/" + this.userAuth.uid+"/survey/").push({
        survey: this.selectedArray
      });
      this.$store.commit("updateSurveyVisible", false);
      this.$store.commit("updateResearch", true);
    },
    addAnswer(question, answer) {
      if (question === 0) {
        this.selectedArray[0].answer = answer
      }
      if (question === 1) {
        this.selectedArray[1].answer = answer
      }
      if (question === 2) {
        this.selectedArray[2].answer = answer
      }
      if (question === 3) {
        this.selectedArray[3].answer = answer
      }
    }
  },
  computed: mapState({
    surveyVisible: state => state.surveyVisible
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
