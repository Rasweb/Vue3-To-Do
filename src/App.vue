<template>
  <Header />
  <todo-list />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import DeleteBtn from "./components/Todos/Buttons/DeleteTodo.vue";
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

// For testing
// * {
//   outline: 1px solid red;
// }

@mixin desktop() {
  @media screen and (min-width: 1024px) {
    @content;
  }
}

html,
body {
  margin: 0px;
  padding: 0px;
  background-color: #ece6d9;
}

body,
input,
button {
  font-family: HyliaSerif;
}
/* Specifies a custom font*/
@font-face {
  font-family: HyliaSerif;
  src: url("./assets/HyliaSerifBeta-Regular.otf") format("opentype");
}

h1 {
  text-align: center;
  @include desktop {
    font-size: 40px;
  }
}

#app {
  padding: 0;
  margin: 0;
}
</style>
