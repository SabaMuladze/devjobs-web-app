<template>
  <div :class="{ dark: dark }">
    <header
      class="w-full h-[130px] p-6 bg-white dark:bg-[#121721] md:h-[160px] md:pt-9"
    >
      <div class="flex justify-between items-center xl:w-[1070px] lg:mx-auto">
        <div class="text-white text-3xl font-bold">devjobs</div>
        <div class="flex items-center gap-3 h-fit">
          <img src="../../public/assets/desktop/icon-sun.svg" alt="" />
          <toggle @value="toggleVal"></toggle>
          <img src="../../public/assets/desktop/icon-moon.svg" alt="" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Toggle from "./Toggle.vue";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
};
</script>

<style scoped>
header {
  background-image: url("../../public/assets/mobile/bg-pattern-header.svg");
}
@media (min-width: 768px) {
  header {
    background-image: url("../../public/assets/tablet/bg-pattern-header.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media (min-width: 1024px) {
  header {
    background-image: url("../../public/assets/desktop/bg-pattern-header.svg");
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 160px;
  }
}
</style>
