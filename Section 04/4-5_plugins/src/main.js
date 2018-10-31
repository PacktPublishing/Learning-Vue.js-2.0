import Vue from "vue";
import App from "./App.vue";

import GlobalComponent from "./components/GlobalComponent";

Vue.config.productionTip = false;

const ExamplePlugin = {
  install(Vue) {
    Vue.aGlobalFunction = () => {
      console.log("I am 'aGlobalFunction()'!");
    };
    // this.$alert
    Vue.prototype.$alert = function(message) {
      alert(message);
    };
    Vue.component("GlobalComponent", GlobalComponent);
    Vue.mixin({
      mounted() {
        console.log("Vue Plugin mixin, mounted()");
      }
    });
  }
};

Vue.use(ExamplePlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
