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
  data() {
    // use the store for all state in this component
    return store;
  },
  methods: {
    // adds a product to the shopping cart via the productId
    addToCart(productId) {
      store.cart.forEach(element => {
        if (element.id == productId) {
          element.amount++;
        }
      });
      console.log("adding to cart", productId);
    }
  }
};
</script>
