<template>
  <div class="hello-world">
    <button v-bind:style="styleObject" @click="changeColour">{{ msg }}</button>
  </div>
</template>

<script>
import colourMixin from "@/mixins/colourMixin.js";
export default {
  name: "HelloWorld",
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
  created() {
    console.log("HelloWorld Component");
  },
  methods: {
    changeColour() {
      this.randomColour(this);
    }
  }
};
</script>
