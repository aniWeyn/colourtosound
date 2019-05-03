<template>
  <div>
    <section v-if="surveyVisible">
    <div  v-for="(element, index) in survey" :key="index">
      <h4>{{element.title}}</h4>
      <p>{{element.paragraph}}</p>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "consentForm",
  props: ["consent"],
  data() {
    return {
      surveyVisible: true,
    };
  },
  methods: {
    next(){
      this.surveyVisible = false
    }
  }
};
</script>

<style>
</style>
