<template>
  <li :class="className">
    <div v-if="name === 'client-list'">
      <div>
        {{ item.name }}
        {{ new Date(item.time * 1000).toISOString().substr(11, 8) }}
      </div>
      <Button
        :buttonClasses="['button--transparent']"
        :buttonContent="index === active ? 'Stop' : 'Start'"
        v-on:clicked="handleClick"
      />
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
    ...mapActions(["startTimer"]),
    handleClick() {
      this.startTimer(this.$props.index);
    },
  },
});
</script>

<style lang="scss"></style>
