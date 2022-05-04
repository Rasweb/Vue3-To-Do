<template>
  <div>
    <h1>Todo list</h1>
    <div class="todoList">
      <AddTodo @addTodo="handleAddTodo($event)" />
      <!-- <p>Ordered by order</p> -->
      <ul>
        <li
          v-for="(todo, index) in todos"
          :key="todo.id"
          :class="[{ done: todo.done }]"
        >
          <h3>{{ todo.title }} in {{ todo.location }}</h3>
          <h4>Given by {{ todo.giver }}</h4>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dolores cumque tenetur rerum iure esse reiciendis quas, aperiam
              recusandae quod architecto iste neque temporibus vel aut
              praesentium. Autem, veniam tempora!
            </p>
          </div>
          <div class="btnCont">
            <label
              >&#10003;
              <input type="checkbox" v-model="todo.done" />
            </label>
            <DeleteTodo @deleteTodo="handleRemoveTodo($event, index)" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import DeleteTodo from "./Buttons/DeleteTodo.vue";
import AddTodo from "./Buttons/AddTodo.vue";
import App from "@/App.vue";

@Options({
  components: {
    DeleteTodo,
    AddTodo,
    App,
  },
})
export default class TodoList extends Vue {
  todos: Todo[] = [
    new Todo("Divine Beast Vah Ruta", "Zoras's Domain", "King Zora", 1),
    new Todo("Divine Beast Vah Rudania", "Goron City", "Boss Bludo", 2),
    new Todo("Divine Beast Vah Medoh", "Rito Village", "Elder Kaneli", 3),
    new Todo("Divine Beast Vah Naboris", "Gerudo Town", "Chief Riju", 4),
    new Todo("The Hero's Sword", "Great Hyrule Forest", "Lost Woods", 5),
    new Todo("Captured Memories", "Kakariko Village", "Impa", 6),
    new Todo("Destroy Ganon", "Hyrule Castle", "King Rhoam", 7),
  ];

  todoDone = false;

  handleRemoveTodo(t: Todo, index: number) {
    console.log("You removed a Todo");
    // this.todos.splice(0, 1);
    this.todos.splice(index, 1);
  }
  handleAddTodo(t: Todo) {
    console.log("You are adding a Todo", t);
    this.todos.push(t);
  }

  handleDoneTodo(t: Todo, index: number) {
    console.log("You are changing a Todo", t, index);
    t.done = !t.done;
  }
}
</script>

<style lang="scss" scoped>
@mixin desktop() {
  @media screen and (min-width: 1024px) {
    @content;
  }
}

h1 {
  border-top: 1px solid black;
  @include desktop {
    font-size: 36px;
  }
}

.todoList {
  h3 {
    @include desktop {
      font-size: 32px;
    }
  }
  h4 {
    @include desktop {
      font-size: 22px;
    }
  }
  p {
    @include desktop {
      font-size: 18px;
    }
  }

  margin: 4%;
  ul {
    padding: 0;
    li {
      list-style: none;
      background-color: white;
      padding: 16px;
      margin: 5% 0;
      border-radius: 20px;
    }
  }
  .done {
    background-color: rgb(186, 186, 186);
    p,
    h3,
    h4 {
      text-decoration: line-through;
    }
  }
  .btnCont {
    display: flex;
    label {
      font-size: 25px;
      cursor: pointer;
      text-decoration: none;
      @include desktop {
        font-size: 32px;
      }
      input {
        display: none;
      }
    }
    label:hover {
      background-color: #17b169;
      color: white;
    }
  }
}
</style>
