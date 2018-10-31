<template>
  <div id="app">
    <h1>The Vue Lifecycle</h1>
    <button type="button" v-on:click="changeTitle">change gallery title</button>
    <Gallery v-bind:title="galleryTitle" />
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  components: {
    Gallery
  },
  data(){
    return {
      galleryTitle: 'myGallery'
    }
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()');
  },
  beforeMount(){
    console.log('beforeMount()');
  },
  mounted(){
    console.log('mounted()');
  },
  beforeUpdate(){
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  beforeDestroy(){
    console.log('beforeDestory()');
  },
  destroyed(){
    console.log('destory()');
  },
  methods: {
    changeTitle() {
      this.galleryTitle = 'Beach Photography';
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
</style>
