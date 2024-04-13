<script lang="ts" setup></script>

<template>
  <header class="NavigationBar">
    <img class="NavigationBar__logo" src="/spacex.svg" alt="Space X logo" />
  </header>
</template>

<style scoped>
.NavigationBar {
  padding: 20px 30px;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 50;
}

.NavigationBar__logo {
  width: 200px;
  margin: 0 auto;
  display: block;
}
</style>
