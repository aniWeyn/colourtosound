<template>
  <div id="app">
       <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous" >
    <div id="nav" v-if="!research">
      <router-link to="/">Home</router-link> |
      <router-link to="/survey">Survey</router-link> |
      <router-link to="/researchAIC">Research AIC 2019</router-link> |
      <router-link to="/researchCP">Research CP</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <router-view class="container-fluid"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
name: "app",
  computed: mapState({
    research: state => state.research,
  })

}
</script>

<style>
#app {
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
