<template>
  <div>
    <Button
      :buttonClasses="['button--transparent']"
      :buttonContent="'<ion-icon name=trash-outline></ion-icon>'"
      v-on:clicked="handleClick"
    />
    <div v-if="toggle">
      <div>Oletko varma?</div>
      <div class="d-flex">
        <Button
          :buttonClasses="['button--transparent']"
          :buttonContent="'Kyllä'"
          v-on:clicked="handleYesClick"
        />
        <Button
          :buttonClasses="['button--transparent']"
          :buttonContent="'Ei'"
          v-on:clicked="handleNoClick"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./Button.vue";

// Components

export default Vue.extend({
  name: "EmptyButton",
  components: {
    Button,
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    handleClick() {
      this.toggle = !this.toggle;
    },
    handleYesClick() {
      this.$emit("clicked");
      this.handleClick();
    },
    handleNoClick() {
      this.handleClick();
    },
  },
});
</script>

<style lang="scss"></style>
