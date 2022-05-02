<template>
  <header>
    <h1>Quests</h1>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <h4>{{ todo.title }} in {{ todo.location }}</h4>
          <p>Given by {{ todo.giver }}</p>
          <div class="rewardCont">
            <p>Salary: {{ todo.reward }} rupees</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolores cumque tenetur rerum iure esse reiciendis quas, aperiam
            recusandae quod architecto iste neque temporibus vel aut
            praesentium. Autem, veniam tempora!
          </p>
        </li>
      </ul>
    </div>
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
export default class TodoList extends Vue {
  todos: Todo[] = [
    new Todo("A Shady Customer", "East Akkala Stable", "Hoz", 100, 1),
    new Todo("The Jewel Trade", "Goron City", "Ramella", 500, 2),
    new Todo("Medicinal Molduga", "Gerudo Town", "Malena", 300, 3),
    new Todo("An Ice Guy", "Kara Kara Bazaar", "Guy", 50, 4),
    new Todo("A Freezing Rod", "Great Hyrule Forest", "Kula", 100, 5),
    new Todo("The Hero's Cache", "Kitano Bay", "Kass", 300, 6),
  ];
}
</script>

<style lang="scss" scoped>
h1 {
  border-top: 1px solid black;
}
</style>
