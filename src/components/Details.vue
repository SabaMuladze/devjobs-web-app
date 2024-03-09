<template>
  <div :class="{ dark: dark }" class="bg-[#F4F6F8]">
    <div class="dark:bg-[#121721] min-h-[100vh] px-6 mx-auto">
      <div
        class="bg-white dark:bg-[#19202D] p-[25px] rounded-lg relative bottom-5 mx-auto max-w-[730px] md:py-0 md:pl-0"
      >
        <div
          class="flex items-center flex-col gap-5 relative md:flex-row md:justify-between"
        >
          <div class="flex justify-center md:justify-between gap-5">
            <div
              :class="`w-[50px] h-[50px] flex items-center justify-center absolute p-1 top-[-50px] rounded-lg md:relative md:h-[140px] md:w-[140px] md:top-0 `"
              :style="{ backgroundColor: jobsData[0]?.logoBackground }"
            >
              <img
                class="md:scale-150"
                :src="'../../public/' + jobsData[0]?.logo"
                alt=""
              />
            </div>
            <div
              class="flex flex-col gap-3 text-center mt-5 md:justify-center md:mt-0"
            >
              <h1>{{ jobsData[0]?.company }}</h1>
              <p>{{ jobsData[0]?.company }}.com</p>
            </div>
          </div>
          <button
            class="px-4 py-3 font-bold text-[#5964E0] text-[16px] bg-[#5964e021] rounded-lg"
          >
            Company Site
          </button>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
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

    console.log(this.jobsData[0].logo);
  },
};
</script>
