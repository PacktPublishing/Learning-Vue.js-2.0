<template>
  <div class="component-product">
    {{name}} - {{price}} USD <button v-on:click="addToCart(id)">add to cart</button>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  name: "product",
  props: ["price", "name", "id"],

  methods: {
    addToCart(productId) {
      store.commit("addOneToCart", productId);
      /*
      store.cart.forEach(element => {
        if (element.id == productId) {
          element.amount++;
        }
      });
      */
    }
  }
};
</script>