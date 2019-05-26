import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isConsentAccepted: false,
    research: false,
    notes: [],
    notesOrdered: [],
    notesArrayIndex: 0,
    notesArrayLength: 0,
    shuffle: false,
    answers: [],
    answersTwo: [],
    thanks:false,
    blockButtonNext: true,
    hue: 0,
    saturation: 0,
    lightness: 50,
    color: "hsl(0, 0%, 50%)",
    showInstructions: true,
    showResults: false,
    surveyVisible: false,
    showSoundPicker: false,
    showColorPicker: false,
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
    updateNotesOrdered(state, notes)
    {
      state.notesOrdered.push({notes})
    },
    updateNotesArrayIndex(state)
    {
      state.notesArrayIndex++
    },
    restartNotesArrayIndex(state)
    {
      state.notesArrayIndex = 0
    },
    updateAnswersNote(state, answers)
    {
      state.answers.push({note: answers.note, color: answers.color, hue: answers.hue, saturation: answers.saturation, lightness: answers.lightness})
    },
    updateAnswersTwoNote(state, answers)
    {
      state.answersTwo.push({note: answers.note, color: answers.color})
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
    updateshowInstructions(state, bool)
    {
      state.showInstructions = bool
    },
    updateSurveyVisible(state, bool)
    {
      state.surveyVisible = bool
    },
    updateResults(state, bool)
    {
      state.showResults = bool
    },
    updateSoundPicker(state, bool){
      state.showSoundPicker = bool
    },
    updateColorPicker(state, bool){
      state.showColorPicker = bool
    }
  },
  actions: {

  }
})
