import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isConsentAccepted: false,
  },
  mutations: {
    updateConsent(state)
    {
      state.isConsentAccepted = true
    }
  },
  actions: {

  }
})
