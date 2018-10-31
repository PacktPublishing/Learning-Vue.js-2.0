<template>
  <div id="app">
    <h1>Vue Hot Reloading</h1>
    <p>You have been here for {{seconds}} seconds.</p>
    <HelloWorld destination="World" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      seconds: 1
    };
  },
  created() {
    setInterval(() => {
      this.seconds++;
    }, 1000);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 60%;
  margin: 60px auto;
}
</style>
