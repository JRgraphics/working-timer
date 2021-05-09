<template>
  <div>
    <div class="d-flex justify-content-center">
      <input
        class="input input__add-client"
        v-model="client"
        type="text"
        placeholder="Lisää asiakas"
      />
      <Button
        :buttonClasses="['button--transparent']"
        :buttonContent="'Lisää'"
        v-on:clicked="handleOnAdd"
      />
    </div>

    <List :list="allTimes" :name="'client-list'" />
    <div class="d-flex align-items-center justify-content-between">
      <EmptyButton v-on:clicked="handleOnEmpty" />
      <vue-json-to-csv
        :csv-title="'tyoaika'"
        :json-data="allTimes"
        :labels="{
          name: { title: 'Asiakas' },
          timeString: { title: 'Työaika' },
        }"
      >
        <button class="button button--dark">
          <b>Tallenna .csv</b>
        </button>
      </vue-json-to-csv>
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
import VueJsonToCsv from "vue-json-to-csv";

// Components
import Button from "../Button.vue";
import EmptyButton from "../EmptyButton.vue";
import List from "./List.vue";

export default Vue.extend({
  name: "ClientList",
  components: { List, Button, EmptyButton, VueJsonToCsv },
  data() {
    return {
      client: "",
    };
  },
  computed: mapGetters(["allTimes"]),
  methods: {
    ...mapActions(["handleEmpty", "handleStop", "addClient"]),
    handleOnAdd() {
      if (this.client !== "") {
        this.addClient(this.client);
      }
      this.client = "";
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
