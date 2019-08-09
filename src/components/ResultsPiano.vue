<template>
 <div class="container-fluid p-3">
         <div class="col-md-12">
      <div id="grad1" class="">
        <vue-slider
          :tooltip="'none'"
          v-model="value"
          :data="pianoNotes"
          :marks="false"
          :process-style="{ backgroundColor: 'hsl(0,0%,55%)'}"
          @change="unlockNext(value)"
        />
      </div>
    </div>
 </div>
</template>

<script>
import Tone from "tone";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
export default {
  name: "resultsPiano",
  components: {
    VueSlider
  },
  data() {
    return {
      pianoNotes: [
        "C2",
        "D2",
        "E2",
        "F2",
        "G2",
        "A2",
        "B2",
        "C3",
        "D3",
        "E3",
        "F3",
        "G3",
        "A3",
        "B3",
        "C4",
        "D4",
        "E4",
        "F4",
        "G4",
        "A4",
        "B4",
        "C5",
        "D5",
        "E5",
        "F5",
        "G5",
        "A5",
        "B5",
        "C6",
        "D6",
        "E6",
        "F6",
        "G6",
        "A6",
        "B6"
      ],
    }
  },
  methods: {
    unlockNext(sound) {
      this.$store.commit("blockButtonNext", false);
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease(sound, "8n");
    },
  }
}
</script>

<style>
#grad1 {
  height: 200px;
  background-image: linear-gradient(to right, black ,blue,green, yellow,white); 
}
#grad1 .vue-slider-process{
    display: none !important;

}

.vue-slider-rail{
height: 200px !important;
background-color: transparent !important;
}

.vue-slider-rail:hover{
height: 200px !important;
background-color: transparent !important;
}

.vue-slider-dot-handle{
transition-duration: 0s, 0s, 0s !important;
background-color: transparent !important;
}

</style>
