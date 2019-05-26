<template>
  <div class="container">
    <section v-if="consentVisible" class="pb-3">
    <div  v-for="(element, index) in consent" :key="index">
      <h4>{{element.title}}</h4>
      <p>{{element.paragraph}}</p>
    </div>
    <hr>
    <h4>Before you start</h4>
    <p>Please turn off applications which are changing display colours to warmer (any blue-light blocking applications) such as Night light or Flux. </p>
    <p>If possible, please use headphones, and set volume on comfortable level.</p>
    <button type="button" class="btn btn-success" @click="next()">I agree, go to study</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "consentForm",
  props: ["consent"],
  data() {
    return {
      consentVisible: true,
    };
  },
  methods: {
    next(){
      this.consentVisible = false
      this.$store.commit("updateSurveyVisible", true);
      this.$store.commit("updateResearchStartTime");
    }
  }
};
</script>

<style>
.container{
  color: black;
}
</style>
