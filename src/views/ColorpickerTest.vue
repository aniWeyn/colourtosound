<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center">
      <div class="square"></div>
    </div>
    <div>
      <input type="range" min="0" max="360" step="1" value="0" data-orientation="vertical">
    </div>
    <div>
      <input type="range" min="0" max="360" step="1" value="0" data-orientation="horizontal">
    </div>
    <div>
      Vueslider: <br>
     <vue-slider v-model="value1" 
      :process-style="{ backgroundColor: 'pink' }"
      :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }"
            :min="0"
      :max="360"
      :interval="1"
      />
         <vue-slider
      v-model="value2"
      :tooltip="'none'"
      direction="btt"
      :height="300"
      style="display: inline-block; margin: 30px;"
    ></vue-slider>
    </div>
  </div>
</template>
<script>
import JQuery from "jquery";
let $ = JQuery;
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
export default {
  name: "colorpicker-test",
    components: {
    VueSlider
  },
  data () {
    return {
      value1: 0,
      value2: 0,
    }
  }
  };
</script>

<style scss>

</style>
