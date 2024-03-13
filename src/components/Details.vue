<template>
  <div :class="{ dark: dark }" class="bg-[#F4F6F8]">
    <div class="dark:bg-[#121721] min-h-[100vh] px-6 mx-auto">
      <div
        class="bg-white dark:bg-[#19202D] p-[25px] rounded-lg relative bottom-5 mx-auto max-w-[730px] md:py-0 md:pl-0 md:bottom-10"
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
      <div
        class="bg-white dark:bg-[#19202D] p-[25px] rounded-lg relative bottom-5 mx-auto mt-8 max-w-[730px]"
      >
        <div class="md:flex items-center justify-between">
          <div>
            <div class="flex flex-col gap-1">
              <p class="flex items-center gap-1">
                {{ jobsData[0]?.postedAt }}
                <span class="h-1 w-1 rounded-full bg-[#6E8098] relative"></span>
                {{ jobsData[0]?.contract }}
              </p>
              <h1 class="sm:text-[25px] md:text-[28px]">
                {{ jobsData[0]?.position }}
              </h1>
            </div>
            <div class="mt-1">
              <h2>{{ jobsData[0]?.location }}</h2>
            </div>
          </div>
          <div class="mt-10 flex items-center md:w-[141px] md:mt-0">
            <button
              class="w-full h-12 bg-[#5964E0] rounded-md flex items-center justify-center text-white font-bold"
              @click=""
            >
              Apply Now
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-10 mt-10">
          <p>{{ jobsData[0]?.description }}</p>
          <h1>Requirements</h1>
          <p>{{ jobsData[0]?.requirements.content }}</p>
          <ul class="flex flex-col gap-5">
            <li
              v-for="(item, index) in jobsData[0]?.requirements.items"
              :key="index"
            >
              <div class="">
                <div
                  class="absolute h-1 w-1 mt-2 bg-[#5964E0] rounded-full z-50"
                ></div>
                <p class="ml-6">{{ item }}</p>
              </div>
            </li>
          </ul>
          <h1>What You Will Do</h1>
          <p>{{ jobsData[0]?.role.content }}</p>
          <ul class="flex flex-col gap-5">
            <li v-for="(item, index) in jobsData[0]?.role.items" :key="index">
              <div class="">
                <div class="absolute text-[#5964E0] font-bold z-50">
                  {{ index + 1 }}
                </div>
                <p class="ml-6">{{ item }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="bg-white p-6 dark:dark:bg-[#19202D] flex justify-center">
      <div class="w-full flex items-center md:justify-between md:w-[730px]">
        <div class="max-md:hidden">
          <h1 class="sm:text-[25px]">
            {{ jobsData[0]?.position }}
          </h1>
          <p>{{ jobsData[0]?.company }}</p>
        </div>
        <button
          class="w-full h-12 bg-[#5964E0] rounded-md flex items-center justify-center text-white font-bold md:w-[140px] btn"
          @click=""
        >
          Apply Now
        </button>
      </div>
    </footer>
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

<style scoped></style>
