<template>
  <div><p>Todo Delete Button</p></div>
</template>

<script>
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class DeleteBtn extends Vue {
  removeToDo = (i) => {
    Todo.splice(i, 1);
  };
}
</script>

<style></style>
