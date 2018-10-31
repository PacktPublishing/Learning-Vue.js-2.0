<template>
  <div class="gallery">
    <h2>{{title}}</h2>
    <div v-for="(image, i) in images" :key="i">
      <img v-bind:src="require('../assets/' + image.imageName)" alt="" />
      <Photographer :name="image.photographerName" :link="image.photographerLink" />
    </div>
  </div>
</template>

<script>
import Photographer from './Photographer';
export default {
  props: [
    'title'
  ],
  components: {
    Photographer
  },
  data() {
    return {
      images: [
        {
          imageName: "wil-stewart-61771-unsplash.jpg",
          URL: "https://unsplash.com/photos/K_TbABnVzHo",
          photographerLink: "https://unsplash.com/@wilstewart3",
          photographerName: "Wil Stewart"
        },
        {
          imageName: "ethan-robertson-134952-unsplash.jpg",
          URL: "https://unsplash.com/photos/SYx3UCHZJlo",
          photographerLink: "https://unsplash.com/@ethanrobertson",
          photographerName: "Ethan Robertson",
        },
        {
          imageName: "cole-keister-255752-unsplash.jpg",
          URL: "https://unsplash.com/photos/xMMh-VFGL9M",
          photographerLink: "https://unsplash.com/@coleito",
          photographerName: "Cole Keister"
        }
      ]
    };
  }
};
</script>

<style>
img {
  display: block;
  margin: 1em auto;
  width: 250px;
}
</style>