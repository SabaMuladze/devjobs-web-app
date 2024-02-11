<template>
  <div :class="{ dark: dark }">
    <div class="bg-white dark:bg-black">Home</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
};
</script>

<style scoped></style>
