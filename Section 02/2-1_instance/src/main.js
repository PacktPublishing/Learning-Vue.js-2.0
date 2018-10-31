import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var a = new Vue({
  render: h => h(App)
}).$mount('#app');

var b = new Vue({
  render: h => h(App)
}).$mount('#app2');

console.log(a);
console.log(b);
