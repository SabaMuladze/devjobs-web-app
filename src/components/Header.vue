<template>
  <header class="w-full h-[130px] p-6">
    <div class="flex justify-between items-center">
      <div class="text-white text-3xl font-bold">devjobs</div>
      <div class="flex items-center gap-3 h-fit">
        <img src="../../public/assets/desktop/icon-sun.svg" alt="" />
        <toggle @value="toggleVal"></toggle>
        <img src="../../public/assets/desktop/icon-moon.svg" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
import Toggle from "./Toggle.vue";
export default {
  components: {
    Toggle,
  },
  methods: {
    changeDarkValue() {
      this.$store.dispatch("setDarkValue");
    },
    toggleVal() {
      this.changeDarkValue();
    },
  },
};
</script>

<style scoped>
header {
  background-image: url("../../public/assets/mobile/bg-pattern-header.svg");
}
</style>
