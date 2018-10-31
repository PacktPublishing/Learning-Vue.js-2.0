<template>
  <span class="glitch-text">{{currentText}}</span>
</template>

<script>

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default {
  name: "GlitchText",
  props: ["text", "speed"],
  data() {
    return {
      currentText: "",
      defaultSpeed: 300,
      currentSpeed: 0,
      glitchRange: '^$%&/=?<>~█',
      finalText: ""
    };
  },
  watch: {
    text: function(val) {
      this.currentText = "";
      this.displayText(val, "");
    }
  },
  created() {
    if (this.speed) {
      this.currentSpeed = this.speed;
    } else {
      this.currentSpeed = this.defaultSpeed;
    }
  },
  mounted() {
    this.finalText = this.text;
    this.displayText(this.text, "");
  },
  updated() {
  },
  methods: {
    displayText(text, target) {
      var self = this;
      if (text.length > target.length + 1) {
        setTimeout(() => {
          let newCurrent;
          newCurrent = target + text[target.length];
          newCurrent += self.glitchChar(self.glitchRange);
          target += text[target.length];
          self.currentText = newCurrent;
          self.displayText(text, target);
        }, self.currentSpeed);
      } else {
        self.currentText = text;
      }
    },
    glitchChar(characters) {
      let char = characters[getRandomInt(characters.length - 1)];
      return char;
    }
  }
};
</script>
<style scoped>
  .glitch-text {
    font-size: 2rem;
    display: block;
  }
</style>