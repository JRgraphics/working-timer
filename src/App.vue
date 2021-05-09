<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./components/pages/Home.vue";

export default Vue.extend({
  name: "App",
  components: {
    Home,
  },
});
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>
