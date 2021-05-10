<template>
  <li :class="className">
    <div v-if="name === 'client-list'">
      <div class="item__row">
        <label
          >Kohde
          <div class="item__column item__name">{{ item.name }}</div>
        </label>
        <label
          >Alku
          <div class="item__column item__time">
            {{ !!item.start ? item.start : "-" }}
          </div>
        </label>
        <label
          >Loppu
          <div class="item__column item__time">
            {{ !!item.end ? item.end : "-" }}
          </div>
        </label>
        <label
          >Aika
          <div class="item__column item__time">
            {{ new Date(item.time * 1000).toISOString().substr(11, 8) }}
          </div>
        </label>
      </div>
      <div class="item__row">
        <div class="item__column item__column--full">
          <label
            >Kommentit
            <Button
              :buttonClasses="['button--dark']"
              :buttonContent="!toggle ? 'Avaa' : 'Sulje'"
              v-on:clicked="handleCommentToggle"
            />
            <textarea
              v-if="toggle"
              v-model="comment"
              v-on:input="handleOnChange"
              maxlength="200"
            ></textarea>
            <div v-if="!toggle">
              {{ this.item.comment }}
            </div>
          </label>
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
            v-if="doneItems.findIndex((item) => item === index) === -1"
          />
        </div>
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
  data() {
    return {
      comment: this.item.comment,
      toggle: false,
    };
  },
  components: { Button },
  computed: mapGetters(["active", "doneItems", "allTimes"]),
  methods: {
    ...mapActions(["startTimer", "removeClient", "addComment"]),
    handleClick() {
      this.startTimer(this.$props.index);
    },
    handleRemove() {
      this.removeClient(this.$props.index);
    },
    handleOnChange() {
      this.addComment({ index: this.$props.index, comment: this.comment });
    },
    handleCommentToggle() {
      this.toggle = !this.toggle;
    },
  },
});
</script>

<style lang="scss"></style>
