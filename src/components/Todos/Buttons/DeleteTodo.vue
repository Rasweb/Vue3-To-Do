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

<style lang="scss" scoped>
@mixin desktop() {
  @media screen and (min-width: 1024px) {
    @content;
  }
}

button {
  cursor: pointer;
  font-size: 18px;
  padding: 4px 6px;
  margin: 4px 18px;
  background-color: white;
  border: none;
  @include desktop {
    font-size: 25px;
  }
}

button:hover {
  background-color: #f44336;
  color: white;
}
</style>
