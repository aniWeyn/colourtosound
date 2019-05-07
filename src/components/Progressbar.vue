<template>
  <div>
    <!--<div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      style="width: 25%;"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >25%</div>
    </div>-->
    <div class="d-flex flex-row-reverse">{{notesArrayIndex + 1}}/{{notesArrayLength}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "progressbar",
  computed: mapState({
    notesArrayIndex: state => state.notesArrayIndex,
    notesArrayLength: state => state.notesArrayLength
  })
};
</script>

<style>
</style>
