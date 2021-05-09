<template>
  <div>
    <Button
      :buttonClasses="['button--transparent']"
      :buttonContent="'Lisää'"
      v-on:clicked="handleOnAdd('pylly')"
    />
    <List :list="allTimes" :name="'client-list'" />
    <div>
      <Button
        :buttonClasses="['button--transparent']"
        :buttonContent="'Tyhjennä'"
        v-on:clicked="handleOnEmpty"
      />
      <Button
        :buttonClasses="['button--transparent']"
        :buttonContent="'Pysäytä'"
        v-on:clicked="handleOnStop"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import Button from "../Button.vue";
// Components
import List from "./List.vue";

export default Vue.extend({
  name: "ClientList",
  components: { List, Button },
  computed: mapGetters(["allTimes"]),
  methods: {
    ...mapActions(["handleEmpty", "handleStop", "addClient"]),
    handleOnAdd(name: string) {
      this.addClient(name);
    },
    handleOnEmpty() {
      this.handleEmpty();
    },
    handleOnStop() {
      this.handleStop();
    },
  },
});
</script>

<style lang="scss"></style>
