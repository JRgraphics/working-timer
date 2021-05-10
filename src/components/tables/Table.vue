<template>
  <table class="table-container">
    <tbody>
      <tr class="table__header">
        <td class="table__column">Alku</td>
        <td class="table__column">Loppu</td>
        <td class="table__column">Aika</td>
        <td class="table__column">Kohde</td>
        <td class="table__column">Kommentit</td>
      </tr>
      <TableItem
        v-for="(item, index) in list"
        :key="item.name + index"
        v-bind:item="item"
        v-bind:className="'table__row'"
        v-bind:name="name"
        v-bind:index="index"
      />
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import TableItem from "./TableItem.vue";

// Components

export default Vue.extend({
  name: "Table",
  props: {
    list: Array,
    name: String,
  },
  components: {
    TableItem,
  },
});
</script>

<style lang="scss"></style>
