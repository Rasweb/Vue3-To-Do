<template>
  <Header />
  <TodoList />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import TodoList from "./components/Todos/TodoList.vue";

@Options({
  components: {
    Header,
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
}

h1 {
  text-align: center;
}

#app {
  padding: 0;
  margin: 0;
}
</style>
