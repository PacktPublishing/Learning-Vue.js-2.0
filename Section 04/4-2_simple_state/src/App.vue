<template>
  <div id="app">
    <h1>Vue State Management</h1>
    <div class="products">
      <h2>Products</h2>
        <Product
          v-for="product in products"
          v-bind:key="product.id"
          v-bind:id="product.id"
          v-bind:name="product.name"
          v-bind:price="product.price"
        />
    </div>
    <Cart />
  </div>
</template>

<script>
import store from "@/store.js";
import Cart from "./components/Cart.vue";
import Product from "./components/Product.vue";

export default {
  name: "app",
  components: {
    Cart,
    Product
  },
  data() {
    return store;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 800px;
  overflow: hidden;
}

.products {
  margin-right: 45px;
  border-right: 5px solid black;
  width: 400px;
  float: left;
}

.component-product {
  margin-bottom: 5px;
}

.cart {
  float: left;
}
</style>
