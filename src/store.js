import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isConsentAccepted: false,
    research: false,
    notes: [],
    notesArrayIndex: 0,
    notesArrayLength: 0,
    shuffle: false,
    answers: [{
      note: "",
      color: "",
      hue: "",
      saturation: "",
      lightness: "",
      octave: ""
    }],
    thanks:false,
    blockButtonNext: true,
    hue: 0,
    saturation: 0,
    lightness: 50,
    color: "hsl(0, 0%, 50%)",
    showInstructions: true,
    showResults: false,
    surveyVisible: false
  },
  mutations: {
    updateConsent(state)
    {
      state.isConsentAccepted = true
    },
    updateResearch(state, bool)
    {
      state.research = bool
    },
    updateNotes(state, notes)
    {
      state.notes.push({notes})
    },
    updateNotesArrayIndex(state)
    {
      state.notesArrayIndex++
    },
    updateAnswersNote(state, answers)
    {
      state.answers.push({note: answers.note, color: answers.color, hue: answers.hue, saturation: answers.saturation, lightness: answers.lightness})
    },
    updateAmountOfQuestions(state, amount)
    {
      state.notesArrayLength = amount
    },
    updateShuffle(state, shuffle){
      state.shuffle = shuffle
    },
    updateThanks(state, bool){
      state.thanks = bool
    },
    blockButtonNext(state, bool){
      state.blockButtonNext = bool
    },
    updateColor(state, color){
      state.color = color
    },
    updateHue(state, hue){
      state.hue = hue
    },
    updateSaturation(state, saturation){
      state.saturation = saturation
    },
    updateLightness(state, lightness){
      state.lightness = lightness
    },
    updateshowInstructions(state)
    {
      state.showInstructions = false
    },
    updateSurveyVisible(state, bool)
    {
      state.surveyVisible = bool
    },
    updateResults(state, bool)
    {
      state.showResults = bool
    }
  },
  actions: {

  }
})
