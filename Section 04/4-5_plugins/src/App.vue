<template>
  <div id="app">
    <h1>Vue Plugins</h1>
    <GlobalComponent />
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "app",
  created() {
    console.log("App.vue, created()");
    Vue.aGlobalFunction();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
