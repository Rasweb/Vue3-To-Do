<template>
  <div>
    <button
      @click="
        () => {
          removeTodo();
        }
      "
    >
      Remove a Todo
    </button>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class DeleteTodo extends Vue {
  removeTodo() {
    console.log("Hej");
    this.$emit("deleteTodo");
  }
}
</script>

<style></style>
