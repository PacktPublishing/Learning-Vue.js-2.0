import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "ergonomic keyboard",
        price: 68.38
      },
      {
        id: 2,
        name: "fantastic fair trade coffee",
        price: 2.93
      },
      {
        id: 3,
        name: "a cute robot",
        price: 294
      }
    ],
    cart: [
      {
        id: 1,
        name: "ergonomic keyboard",
        price: 68.38,
        amount: 0
      },
      {
        id: 2,
        name: "fantastic fair trade coffee",
        price: 2.93,
        amount: 0
      },
      {
        id: 3,
        name: "a cute robot",
        price: 294,
        amount: 0
      }
    ]
  },
  mutations: {
    addOneToCart: (state, productId) => {
      console.log(`mutation: addOneToCart with productId: ${productId}`);
      const newState = { ...state };
      newState.cart = state.cart.map(element => {
        if (productId == element.id) {
          element.amount++;
          return element;
        }
        return element;
      });
      return newState;
    },
    removeAllFromCart: (state, productId) => {
      console.log(`mutation: removeAllFromCart with productId: ${productId}`);
      const newState = { ...state };
      newState.cart = state.cart.map(element => {
        if (productId != element.id) {
          return element;
        }
        element.amount = 0;
        return element;
      });
      return newState;
    }
  }
});

export default store;
