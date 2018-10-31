<template>
  <div id="app">
    <h1>Hot reloading</h1>
    <p>You have been here for {seconds} seconds.</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      seconds: 0
    };
  },
  ready() {
    setInterval(() => {
      this.count++;
    }, 1000); // one second
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

.max-length {
  text-align: right;
}

.too-long {
  color: red;
}

.history {
  margin-top: 50px;
}

.tile {
  margin-bottom: 20px;
}

.tile-icon {
  text-align: center;
}

.tile-content {
  font-size: 2rem;
}
</style>
