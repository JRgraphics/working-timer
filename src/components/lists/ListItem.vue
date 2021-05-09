<template>
  <li :class="className">
    <div v-if="name === 'client-list'" class="item__row">
      <div class="item__column item__name">{{ item.name }}</div>
      <div class="item__column item__time">
        {{ new Date(item.time * 1000).toISOString().substr(11, 8) }}
      </div>
      <div class="item__column">
        <Button
          :buttonClasses="['button--dark']"
          :buttonContent="
            index === active
              ? '<ion-icon name=stop-outline></ion-icon>'
              : '<ion-icon name=play-outline></ion-icon>'
          "
          v-on:clicked="handleClick"
        />
      </div>
      <div class="item__column item__remove">
        <Button
          :buttonClasses="['button--transparent']"
          :buttonContent="'<ion-icon name=close-outline></ion-icon>'"
          v-on:clicked="handleRemove"
        />
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

// Components
import Button from "../Button.vue";

export default Vue.extend({
  name: "ListItem",
  props: {
    className: String,
    item: Object,
    name: String,
    index: Number,
  },
  components: { Button },
  computed: mapGetters(["active"]),
  methods: {
    ...mapActions(["startTimer", "removeClient"]),
    handleClick() {
      this.startTimer(this.$props.index);
    },
    handleRemove() {
      this.removeClient(this.$props.index);
    },
  },
});
</script>

<style lang="scss"></style>
