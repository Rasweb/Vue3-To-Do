<template>
  <div>
    <button
      @click="
        () => {
          changeTodo();
        }
      "
    >
      <!-- A check mark -->
      &#10003;
    </button>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class DoneTodo extends Vue {
  changeTodo() {
    console.log("Changing a specific Todo");
    this.$emit("doneTodo");
  }
}
</script>

<style></style>
