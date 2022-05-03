<template>
  <div>
    <button class="showBtn" @click="isActive = false">Add todo</button>
    <form @submit.prevent="" :class="[{ addForm: isActive }]">
      <button @click="isActive = !isActive">Hide</button>
      <input type="text" placeholder="title" v-model="todoTitle" />
      <input type="text" placeholder="location" v-model="todoLoc" />
      <input type="text" placeholder="giver" v-model="todoGiv" />
      <input
        type="number"
        placeholder="id"
        v-model.number="todoId"
        @keypress.enter="handleAddTodo"
      />
      <button
        @click="
          () => {
            handleAddTodo();
          }
        "
      >
        Ny
      </button>
    </form>
  </div>
</template>

<script>
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class AddTodo extends Vue {
  todoTitle = "";
  todoLoc = "";
  todoGiv = "";
  todoId = 0;

  isActive = true;
  handleAddTodo() {
    console.log("Du klickade", this.todoTitle);
    this.$emit(
      "addTodo",
      new Todo(this.todoTitle, this.todoLoc, this.todoGiv, this.todoId)
    );
    this.todoTitle = "";
    this.todoLoc = "";
    this.todoGiv = "";
    this.todoId = "";
  }
  //   scrollToNew() {
  //     const el = this.$refs.scrollToMe;
  //     if (el) {
  //       el.scrollIntoView({ block: "end", behavior: "smooth" });
  //     }
  //   }
}
</script>

<style lang="scss" scoped>
.addForm {
  display: none;
}
</style>
