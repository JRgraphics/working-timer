<template>
  <ClientList />
</template>

<script lang="ts">
import Vue from "vue";
import ClientList from "../lists/ClientList.vue";

export default Vue.extend({
  name: "Home",
  components: { ClientList },
});
</script>

<style lang="scss"></style>
