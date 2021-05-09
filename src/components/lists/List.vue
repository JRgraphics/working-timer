<template>
  <ul class="list">
    <ListItem
      v-for="(item, index) in list"
      :key="item.name + index"
      v-bind:item="item"
      v-bind:className="'list__item'"
      v-bind:name="name"
      v-bind:index="index"
    />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

// Components
import ListItem from "./ListItem.vue";

export default Vue.extend({
  name: "List",
  props: {
    list: Array,
    name: String,
  },
  components: { ListItem },
});
</script>

<style lang="scss"></style>
