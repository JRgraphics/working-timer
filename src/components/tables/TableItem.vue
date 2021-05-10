<template>
  <tr v-if="name === 'client-table'" class="table__row">
    <td class="table__column">
      <div v-if="!!item.start">
        {{
          new Date(item.start).getHours() +
            ":" +
            new Date(item.start).getMinutes()
        }}
      </div>
    </td>
    <td class="table__column">
      <div v-if="!!item.end">
        {{
          new Date(item.end).getHours() + ":" + new Date(item.end).getMinutes()
        }}
      </div>
    </td>
    <td class="table__column">
      <div v-if="item.time">
        {{ new Date(item.time * 1000).toISOString().substr(11, 8) }}
      </div>
    </td>
    <td class="table__column">
      <div>{{ item.name }}</div>
    </td>
    <td class="table__column">
      <div>{{ item.comment }}</div>
    </td>
    <td class="table__column">
      <Button
        :buttonClasses="['button--dark']"
        :buttonContent="
          index === active
            ? '<ion-icon name=stop-outline></ion-icon>'
            : '<ion-icon name=play-outline></ion-icon>'
        "
        v-on:clicked="handleClick"
        v-if="doneItems.findIndex((item) => item === index) === -1"
      />
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

// Components
import Button from "../Button.vue";

export default Vue.extend({
  name: "TableItem",
  props: {
    className: String,
    item: Object,
    name: String,
    index: Number,
  },
  components: { Button },
  computed: mapGetters(["active", "doneItems"]),
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
