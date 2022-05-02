<template>
  <Header />
  <delete-btn />
  <todo-list />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import DeleteBtn from "./components/Todos/Buttons/TodoDeleteButton.vue";
import TodoList from "./components/Todos/TodoList.vue";

@Options({
  components: {
    Header,
    TodoList,
    DeleteBtn,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");

html,
body {
  margin: 0px;
  padding: 0px;
  background-color: #ece6d9;
}

/* Specifies a custom font*/
@font-face {
  font-family: HyliaSerif;
  src: url("./assets/HyliaSerifBeta-Regular.otf") format("opentype");
}

h1 {
  font-family: HyliaSerif;
  text-align: center;
}

#app {
  padding: 0;
  margin: 0;
}
</style>
