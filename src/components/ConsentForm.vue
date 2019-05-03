<template>
  <div>
    <section v-if="consentVisible">
    <div  v-for="(element, index) in consent" :key="index">
      <h4>{{element.title}}</h4>
      <p>{{element.paragraph}}</p>
    </div>
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
    }
  }
};
</script>

<style>
</style>
