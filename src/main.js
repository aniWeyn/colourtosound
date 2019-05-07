import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//Vue.use(BootstrapVue)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./design/index.css"

import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
