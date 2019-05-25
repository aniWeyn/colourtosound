<template>
  <div class="container-fluid grey">
    <h3>Results</h3>
    <p>Click on clour to hear associated sound.</p>
    <div v-for="(item, index) in answers" :key="index" class>
      <div class="col-md-12 d-flex justify-content-center">
        <h5 v-if="item.note">{{item.note}}</h5>
      </div>
      <div class="d-flex justify-content-center p-3">
        <div
          v-if="item.color"
          class="square"
          :style="{'background-color': item.color}"
          @click="startTone(item.note)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tone from "tone";
export default {
  computed: {
    answers() {
      return this._.orderBy(this.$store.state.answers, ["note"]);
    }
  },
  methods: {
    startTone(note) {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease(
        note,
        "8n"
      );
    }
  }
};
</script>

<style>
</style>
