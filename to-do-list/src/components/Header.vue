<template>
  <header>
    <h1>Header page</h1>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  border: 1px solid blue;
}
</style>
