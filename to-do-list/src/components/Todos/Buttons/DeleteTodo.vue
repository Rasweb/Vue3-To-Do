<template>
  <div>
    <button
      @click="
        () => {
          removeTodo();
        }
      "
    >
      <!-- X mark -->
      &#10007;
    </button>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class DeleteTodo extends Vue {
  removeTodo() {
    console.log("Removing specific Todo");
    this.$emit("deleteTodo");
  }
}
</script>

<style></style>
