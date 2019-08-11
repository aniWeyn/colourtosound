import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLodash from 'vue-lodash'
Vue.use(VueLodash)

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
Vue.component('VueSlider', VueSlider)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./design/index.css"

import 'firebase/auth';
import 'firebase/database';

import Highcharts from 'highcharts'
exportingInit(Highcharts)
import exportingInit from 'highcharts/modules/exporting'
import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
