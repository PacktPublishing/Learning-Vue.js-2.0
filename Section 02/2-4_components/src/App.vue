<template>
  <div id="app">
    <h1>Revealing Text Component</h1>
    <GlitchText :text="this.revealString" :speed="100" />
    <GlitchText :text="this.revealString" :speed="200" />
    <GlitchText :text="this.revealString" :speed="300" />
    <button class="change" v-on:click="changeText">change the text</button>
  </div>
</template>

<script>
import GlitchText from './components/GlitchText.vue'

export default {
  name: 'app',
  components: {
    GlitchText
  },
  data(){
    return {
      revealString: 'Berlin, Germany, 1989'
    }
  },
  methods: {
    changeText() {
      this.revealString = 'Washington, United States, 1963';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button.change {
  display: block;
  margin: 20px auto;
  text-align: center;
  width: 200px;
}

</style>
