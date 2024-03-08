<template>
  <div :class="{ dark: dark }" class="bg-[#F4F6F8]">
    <div class="dark:bg-[#121721] min-h-[100vh]">details</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import data from "../../data.json";

export default {
  data() {
    return {
      id: this.$route.query.id,
      originalData: data,
      jobsData: [],
    };
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
  mounted() {
    this.jobsData = this.originalData.filter((job) => job.id == this.id);

    console.log(this.jobsData);
  },
};
</script>
