const colorMixin = {
  created() {
    console.log("from within the mixin");
  },

  methods: {
    randomColour(componentThis) {
      const colours = [
        "red",
        "green",
        "blue",
        "yellow",
        "magenta",
        "#0e6655",
        "#2471a3",
        "#6c3483",
        "#212f3d",
        "#d35400",
        "#CD5C5C",
        "#641e16"
      ];
      const randomColour = colours[Math.floor(Math.random() * colours.length)];

      componentThis.styleObject.color = randomColour;
      return randomColour;
    }
  }
};

export default colorMixin;
