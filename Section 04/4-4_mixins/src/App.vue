<template>
  <div id="app">
    <h2>Hello World Components</h2>
    <HelloWorld msg="Hi there! Change my colour with a mixin by clicking on me!"/>
    <HelloWorld msg="Hi there! Change my colour with a mixin by clicking on me!"/>
    <HelloWorld msg="Hi there! Change my colour with a mixin by clicking on me!"/>
    <h2>Hello Universe Components</h2>
    <HelloUniverse msg="Hi there! Change my colour with a mixin by clicking on me!"/>
    <HelloUniverse msg="Hi there! Change my colour with a mixin by clicking on me!"/>
    <HelloUniverse msg="Hi there! Change my colour with a mixin by clicking on me!"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloUniverse from "./components/HelloUniverse.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    HelloUniverse
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

button {
  margin-bottom: 7px;
}
</style>
