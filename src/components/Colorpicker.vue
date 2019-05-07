<template>
  <div class="container-fluid p-3">
    <div class="d-flex justify-content-center p-3">
      <div class="square" :style="{'background-color': color}"></div>
    </div>
    <div class="col-md-4 offset-md-4">
      <div class="p-3">
      <vue-slider
        v-model="hue"
        :min="0"
        :max="360"
        :interval="1"
        :process-style="{ backgroundColor: 'hsl(0,0%,55%)'}"
        @change="unlockNext()"
      />
      </div>
      <div class="p-3">
      <vue-slider
        v-model="saturation"
        :min="0"
        :max="100"
        :interval="1"
        :process-style="{ backgroundColor: 'hsl(0,0%,55%)' }"
        @change="unlockNext()"
      />
      </div>
      <div class="p-3">
      <vue-slider
        v-model="lightness"
        :min="0"
        :max="100"
        :interval="1"
        :process-style="{ backgroundColor: 'hsl(0,0%,55%)' }"
        @change="unlockNext()"
      />
      </div>
    </div>
    <!--<div class="col-md-4 offset-md-4">
      HSL: {{hue}}, {{saturation}}, {{lightness}}
      <br>
      HSL: {{color}}
    </div>-->
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
export default {
  name: "colorpicker",
  components: {
    VueSlider
  },
  data() {
    return {

    };
  },
  methods: {
    unlockNext(){
      this.$store.commit("blockButtonNext", false)
        //this.$store.commit("updateSaturation", value)

        //this.$store.commit("updateLightness", value)
  
      this.$store.commit("updateColor", "hsl(" + this.hue + "," + this.saturation + "%," + this.lightness + "%)")
    }
  },
  computed:{
    hue: {
    get () {
      return this.$store.state.hue
    },
    set (value) {
      this.$store.commit('updateHue', value)
    }},
    saturation: {
    get () {
      return this.$store.state.saturation
    },
    set (value) {
      this.$store.commit('updateSaturation', value)
    }},
    lightness: {
    get () {
      return this.$store.state.lightness
    },
    set (value) {
      this.$store.commit('updateLightness', value)
    }},
    color: {
    get () {
      return this.$store.state.color
    },
    set (value) {
      this.$store.commit("updateColor", "hsl(" + this.hue + "," + this.saturation + "%," + this.lightness + "%)")
    }},
  },
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
