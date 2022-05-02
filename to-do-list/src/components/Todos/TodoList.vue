<template>
  <header>
    <h1>TodoList</h1>
  </header>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    todo: Todo,
  },
})
export default class TodoList extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  border: 1px solid blue;
}
</style>
