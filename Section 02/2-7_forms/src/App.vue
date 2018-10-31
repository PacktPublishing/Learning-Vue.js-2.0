<template>
  <div id="app">
    <h1>Vue Forms</h1>
    <h2>Publish a new status:</h2>
    <form class="new-status form-group" v-on:submit="publish">
      <label class="form-label">Your message:</label>
      <textarea
        v-model="currentStatus.text"
        class="form-input"
        placeholder="What's on your mind?">
      </textarea>

      <div
        class="max-length"
        v-bind:class="{ 'too-long': tooLong }">
          message length: {{currentStatus.text.length}}/{{maxLength}}
      </div>

      <label class="form-label">
        <input type="checkbox" v-model="currentStatus.private" />
        <span>mark as private?</span>
      </label>

      <button class="btn btn-primary" v-bind:disabled="tooLong">Publish</button>

    </form>
    <div class="history">
      <div class="update" v-for="(update, index) in updates" v-bind:key="index">
        <div class="tile">
          <div class="tile-icon">
            <figure class="avatar avatar-xl">
              <img v-bind:src="update.avatar">
            </figure>
            <div class="author">{{update.author}}</div>
          </div>
          <div class="tile-content">
            <p class="tile-subtitle text-gray" v-show="update.private">(Private!)</p>
            <p class="tile-content">{{update.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      currentStatus: {
        author: "@jonathanmh_com",
        avatar: require("./assets/jonathanmh.jpg"),
        private: false,
        text: ""
      },
      maxLength: 280,
      updates: []
    };
  },
  computed: {
    tooLong() {
      if (this.currentStatus.text.length > this.maxLength) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    publish(e) {
      e.preventDefault();
      var newStatus = {};
      Object.assign(newStatus, this.currentStatus);
      this.updates.unshift(newStatus);
      this.currentStatus.text = "";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 60%;
  margin: 60px auto;
}

.max-length {
  text-align: right;
}

.too-long {
  color: red;
}

.history {
  margin-top: 50px;
}

.tile {
  margin-bottom: 20px;
}

.tile-icon {
  text-align: center;
}

.tile-content {
  font-size: 2rem;
}
</style>
