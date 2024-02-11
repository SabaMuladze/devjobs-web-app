<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
