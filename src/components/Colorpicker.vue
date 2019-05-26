<template>
  <div class="container-fluid p-3">
    <h3 v-if="showInstructions" class="d-flex justify-content-center">Instructions</h3>
    <p
      v-if="showInstructions"
      class="d-flex justify-content-center"
    >Please choose a colour which fits best with a heard sound.</p>
    <p v-if="showInstructions" class="d-flex justify-content-center">This answer will not be saved.</p>
    <div class="d-flex justify-content-center p-3">
      <div class="square" :style="{'background-color': color}"></div>
    </div>
    <p
      v-if="showInstructions"
      class="d-flex justify-content-center"
    >To change colour please move range sliders.</p>
    <div class="col-md-4 offset-md-4">
      <div class="p-4">
        <p v-if="showInstructions">Hue</p>
        <vue-slider
          v-model="hue"
          :tooltip="'none'"
          :min="0"
          :max="360"
          :interval="1"
          :process-style="{ backgroundColor: 'hsl(0,0%,55%)'}"
          @change="unlockNext()"
        />
      </div>
      <div class="p-4">
        <p v-if="showInstructions">Saturation</p>
        <vue-slider
          :tooltip="'none'"
          v-model="saturation"
          :min="0"
          :max="100"
          :interval="1"
          :process-style="{ backgroundColor: 'hsl(0,0%,55%)' }"
          @change="unlockNext()"
        />
      </div>
      <div class="p-4">
        <p v-if="showInstructions">Lightness</p>
        <vue-slider
          :tooltip="'none'"
          v-model="lightness"
          :min="0"
          :max="100"
          :interval="1"
          :process-style="{ backgroundColor: 'hsl(0,0%,55%)' }"
          @change="unlockNext()"
        />
      </div>
    </div>
    <p
      v-if="showInstructions"
      class="d-flex justify-content-center"
    >To listen the sound again tap/click button play.</p>
    <p
      v-if="showInstructions"
      class="d-flex justify-content-center"
    >If you feel ready click next to start the experiment!</p>
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
    return {};
  },
  methods: {
    unlockNext() {
      this.$store.commit("blockButtonNext", false);
      this.$store.commit(
        "updateColor",
        "hsl(" + this.hue + "," + this.saturation + "%," + this.lightness + "%)"
      );
    }
  },
  computed: {
    hue: {
      get() {
        return this.$store.state.hue;
      },
      set(value) {
        this.$store.commit("updateHue", value);
      }
    },
    saturation: {
      get() {
        return this.$store.state.saturation;
      },
      set(value) {
        this.$store.commit("updateSaturation", value);
      }
    },
    lightness: {
      get() {
        return this.$store.state.lightness;
      },
      set(value) {
        this.$store.commit("updateLightness", value);
      }
    },
    color: {
      get() {
        return this.$store.state.color;
      },
      set() {
        this.$store.commit(
          "updateColor",
          "hsl(" +
            this.hue +
            "," +
            this.saturation +
            "%," +
            this.lightness +
            "%)"
        );
      }
    },
    showInstructions() {
      return this.$store.state.showInstructions;
    }
  }
};
</script>

<style scss>
.custom-dot {
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: pink;
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
