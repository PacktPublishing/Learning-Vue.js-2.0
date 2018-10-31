<template>
  <div class="hello-universe">
    <button v-bind:style="styleObject" @click="changeColour">{{ msg }}</button>
  </div>
</template>

<script>
import colourMixin from "@/mixins/colourMixin.js";
export default {
  name: "HelloUniverse",
  mixins: [colourMixin],
  props: {
    msg: String
  },
  data() {
    return {
      styleObject: {
        color: "black"
      }
    };
  },
  methods: {
    changeColour() {
      this.randomColour(this);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-size: 18px;
  font-weight: bold;
}
</style>
