<template>
  <Header />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
