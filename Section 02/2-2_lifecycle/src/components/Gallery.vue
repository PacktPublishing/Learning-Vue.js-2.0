
<template>
  <div class="gallery">
    <h2>{{title}}</h2>
    <div v-for="(image, i) in images" :key="i">
      <img v-bind:src="require('../assets/' + image.imageName)" alt="" />
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'title'
  ],
  data() {
    return {
      images: [
        {
          imageName: "wil-stewart-61771-unsplash.jpg",
          URL: "https://unsplash.com/photos/K_TbABnVzHo",
          photographer: "https://unsplash.com/@wilstewart3"
        },
        {
          imageName: "ethan-robertson-134952-unsplash.jpg",
          URL: "https://unsplash.com/photos/SYx3UCHZJlo",
          photographer: "https://unsplash.com/@ethanrobertson"
        },
        {
          imageName: "cole-keister-255752-unsplash.jpg",
          URL: "https://unsplash.com/photos/xMMh-VFGL9M",
          photographer: "https://unsplash.com/@coleito"
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