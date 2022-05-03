<template>
  <header>
    <h1>Quest list</h1>
    <div class="todoList">
      <!-- <p>Ordered by order</p> -->
      <ul>
        <li v-for="todo in todos" :key="todo.id">
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
          <div>
            <DeleteTodo @deleteTodo="handleRemoveTodo($event)" />
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import DeleteTodo from "./Buttons/DeleteTodo.vue";

@Options({
  components: {
    DeleteTodo,
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

  handleRemoveTodo(t: Todo) {
    console.log("Du är nu i TodoList", t);
    this.todos.splice(0, 1);
  }
}
</script>

<style lang="scss" scoped>
h1 {
  border-top: 1px solid black;
}

.todoList {
  margin: 4%;
  ul {
    padding: 0;
    li {
      list-style: none;
      background-color: white;
      padding: 16px;
      margin: 5% 0;
      border-radius: 4px;
    }
  }
}
</style>
