<template>
  <div class="home">
    <h1>Home</h1>
    <p>Check out the following items in the vue eco system:</p>
    <div class="post-grid">
      <div class="grid-item" v-for="post in posts" v-bind:key="post.id">
        <router-link :to="'/post/'+post.id">
          <div class="grid-item">
            <h2>{{post.title}}</h2>
            <img :src="post.image" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import posts from '@/data.js'

export default {
  name: 'home',
  components: {
  },
  data(){
    return {
      posts: posts
    }
  }
}
</script>

<style>
.post-grid {
  display: grid;
  width: 500px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.grid-item {
}

.grid-item h2 {
  font-size: 20px;
}

.grid-item img {
  max-width: 100%;
}
</style>