<template>
  <div id="app">
    <h1>Template Interpolation</h1>
    <div>
      <p>I am a simple paragraph!</p>
      <p>first name: {{firstName}}</p>
      <p>last name: {{lastName}}</p>
      <p>full name: {{fullName}}</p>
      <pre>
        {{complexObject}}
      </pre>
      <a v-bind:href="packtLink">Packt</a>
      <img :src="imageURL" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      firstName: `Jonathan`,
      lastName: 'Hethey',
      packtLink: 'http://packtpub.com',
      imageURL: 'https://images.unsplash.com/photo-1452621946466-c0f2ff2ff100?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1930186cc3dd91db75f7c540bb70964d&auto=format&fit=crop&w=1000&q=60',
      complexObject: {
        id: 1,
        enabled: false,
        relatedItems: [2,51,31,27,96]
      }
    }
  },
  computed: {
    fullName(){
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 60%;
  margin: 60px auto;
}

h1 {
  text-align: center;
}

img {
  max-width: 100%;
}

</style>
