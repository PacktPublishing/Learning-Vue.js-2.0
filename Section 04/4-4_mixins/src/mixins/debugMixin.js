const myMixin = {
  beforeCreate: () => {
    console.log(`beforeCreate`);
  },
  created: () => {
    console.log(`created`);
  },
  beforeMount: () => {
    console.log(`beforeMount`);
  },
  mounted: () => {
    console.log(`mounted`);
  },
  beforeDestroy: () => {
    console.log(`beforeDestroy`);
  },
  destroyed: () => {
    console.log(`destroyed`);
  }
};

export default myMixin;
