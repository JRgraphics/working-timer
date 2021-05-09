<template>
  <button
    v-bind:class="'button ' + buttonClasses"
    v-on:click="
      () => {
        this.$emit('clicked');
      }
    "
  >
    <div class="d-flex align-items-center" v-html="buttonContent"></div>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
  props: {
    buttonClasses: Array,
    buttonContent: String,
  },
  methods: {
    startTimer: () => {
      setInterval(() => {}, 1000);
    },
  },
  components: {},
});
</script>

<style lang="scss"></style>
