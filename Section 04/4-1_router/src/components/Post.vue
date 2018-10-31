<template>
  <div class="single-post">
    <h1>{{currentPost.title}}</h1>
    <img :src="'/'+currentPost.image" />
    <p><a :href="currentPost.photographer">Photo Credit</a></p>
    <p>{{currentPost.description}}</p>
    <div v-if="currentPost.link"><a :href="currentPost.link">Read More</a></div>
  </div>
</template>

<script>
import posts from "@/data.js";

export default {
  name: "Post",
  data() {
    return {
      posts,
      currentPost: {}
    };
  },
  created() {
    const self = this;
    // filter the posts so only the currently requested post remains
    this.currentPost = posts.filter(item => {
      // this.$route.params contains your route parameters
      if (item.id == self.$route.params.post_id) {
        return item;
      }
    })[0]; // since filter returns an array, use only the value inside
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
