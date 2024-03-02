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

@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

* {
  font-family: "Kumbh Sans", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  @apply text-[20px] font-bold text-[#19202D] dark:text-white cursor-default;
}
p {
  @apply text-base  text-[#6E8098] cursor-default;
}
h2 {
  @apply text-[15px] font-bold text-[#5964E0] cursor-default;
}
</style>
