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
  data() {
    return {
      // use the store for sharedState in this component
      globalState: store,
      // privateState for this component only
      privateState: {
        vatRate: 0.25
      }
    };
  },
  computed: {
    // returns all products that are in the cart at least once
    inCartProducts() {
      const products = [];
      store.cart.forEach(element => {
        if (element.amount != 0) {
          products.push(element);
        }
      });
      return products;
    },
    // calculates the total price
    total() {
      let total = 0;
      store.cart.forEach(element => {
        if (element.amount != 0) {
          total += element.amount * element.price;
        }
      });
      return total;
    }
  },
  methods: {
    // remove a product from the shopping cart
    removeProduct(productId) {
      this.sharedState.cart = this.sharedState.cart.map(element => {
        if (productId != element.id) {
          return element;
        }
        element.amount = 0;
        return element;
      });
    }
  }
};
</script>
