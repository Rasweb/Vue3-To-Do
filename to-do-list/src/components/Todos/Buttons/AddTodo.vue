<template>
  <div>
    <!-- <button @click="hideAddBtn = false" :class="[{ hideShow: hideAddBtn }]">
      Test
    </button>
    <button @click="hideAddBtn = !hideAddBtn">Test 2</button> -->
    <div class="addCont">
      <button
        @click="
          () => {
            isActive = false;
            hideAddBtn = true;
          }
        "
        :class="[{ hideShow: hideAddBtn }]"
        class="btnAdd"
      >
        Add todo
      </button>
    </div>
    <form @submit.prevent="" :class="[{ addForm: isActive }]">
      <button
        @click="
          () => {
            isActive = !isActive;
            hideAddBtn = !hideAddBtn;
          }
        "
      >
        Hide
      </button>
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
        Add
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
  hideAddBtn = false;

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
}
</script>

<style lang="scss" scoped>
@mixin buttonTemp {
  border: none;
  background-color: white;
  text-align: center;
  font-size: 14px;
  margin: 4px 2px;
  padding: 8px 30px;
  @include desktop {
    font-size: 19px;
  }
}

@mixin desktop() {
  @media screen and (min-width: 1024px) {
    @content;
  }
}

.addCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  .btnAdd {
    @include buttonTemp();
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    @include buttonTemp();
  }
  input {
    color: black;
    margin: 4px 2px;
    font-size: 14px;
    width: 60%;
    border-radius: 5px;
    padding: 00.5rem;
    @include desktop {
      font-size: 18px;
    }
  }
}

.addForm {
  display: none;
}

.hideShow {
  display: none;
}
</style>
