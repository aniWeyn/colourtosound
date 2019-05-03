<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/survey">Survey</router-link> |
      <router-link to="/researchAIC">Research AIC 2019</router-link> |
      <router-link to="/researchCP">Research CP</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/colorpicker">Colorpicker</router-link>
    </div>
    <router-view class="container-fluid"/>
  </div>
</template>

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
