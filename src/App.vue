<template>
  <div id="app">
       <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous" >
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
