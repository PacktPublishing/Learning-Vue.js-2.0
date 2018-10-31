<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <ul>
      <li class="cart-product" 
        v-for="product in inCartProducts"
        v-bind:key="product.id">
        {{product.name}} x {{product.amount}} <button type="button" v-on:click="removeProduct(product.id)">x</button>
      </li>
    </ul>
    <p><strong>total: {{total}} USD</strong></p>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "cart",
  /*
  data() {
    return {
      sharedState = store
    }
  }
  */
  computed: {
    products() {
      return this.$store.state.products;
    },
    cart() {
      return this.$store.state.cart;
    },
    inCartProducts() {
      const products = [];
      this.cart.forEach(element => {
        if (element.amount != 0) {
          products.push(element);
        }
      });
      return products;
    },
    total() {
      let total = 0;
      this.cart.forEach(element => {
        if (element.amount != 0) {
          total += element.amount * element.price;
        }
      });
      return total;
    }
  },
  methods: {
    removeProduct(productId) {
      store.commit("removeAllFromCart", productId);
      /*
      this.sharedState.cart = this.sharedState.cart.map(element => {
        if (productId != element.id) {
          return element;
        }
        element.amount = 0;
        return element;
      });
      */
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
