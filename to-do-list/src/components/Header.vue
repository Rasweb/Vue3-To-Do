<template>
  <h1>Header page</h1>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: HyliaSerif;
  src: url("HyliaSerifBeta-Regular.otf") format("opentype");
}
h1 {
  font-family: HyliaSerif;
}
</style>
