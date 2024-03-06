<template>
  <div class="">
    <div
      class="flex items-center p-5 px-4 max-h-20 m-6 my-0 bg-white rounded-md relative bottom-8 justify-between dark:bg-[#19202D] md:hidden"
    >
      <div class="w-full">
        <input
          class="outline-none h-[30px] bg-inherit w-full dark:text-white"
          type="text"
          placeholder="Filter by title..."
          v-model="title"
          @input="filter"
        />
      </div>
      <div class="flex items-center gap-3">
        <div>
          <img
            class="bg-contain"
            src="../../public/assets/mobile/icon-filter.svg"
            alt=""
          />
        </div>
        <button
          class="w-12 h-12 bg-[#5964E0] rounded-md flex items-center justify-center"
        >
          <img src="../../public/assets/mobile/search.png" alt="" />
        </button>
      </div>
    </div>
    <div
      class="relative m-auto max-md:hidden md:max-w-[690px] lg:max-w-[1110px]"
    >
      <div
        class="flex justify-center items-center px-4 max-h-20 my-0 bg-white rounded-md relative bottom-8 dark:bg-[#19202D] lg:mx-6"
      >
        <div
          class="flex items-center p-5 gap-2 pl-0 border-r-[#979797] border-r-[1px]"
        >
          <img src="../../public/assets/desktop/icon-search.svg" alt="" />
          <input
            class="outline-none h-[30px] bg-inherit max-w-[150px] dark:text-white"
            type="text"
            placeholder="Filter by title..."
            v-model="title"
            @input="filter"
          />
        </div>
        <div
          class="flex items-center p-5 gap-2 border-r-[#979797] border-r-[1px]"
        >
          <img src="../../public/assets/desktop/icon-location.svg" alt="" />
          <input
            class="outline-none h-[30px] bg-inherit max-w-[175px] dark:text-white"
            type="text"
            placeholder="Filter by location..."
            v-model="location"
            @input="locations"
          />
        </div>
        <div class="p-5 pr-0 flex items-center gap-2 w-auto">
          <input
            class="h-[24px] w-[24px] bg-[#979797]"
            type="checkbox"
            v-model="isFullTime"
            @input="fullTime"
          />
          <p class="font-bold text-black">Full Time</p>
          <button
            class="w-20 h-12 bg-[#5964E0] rounded-md flex items-center justify-center text-white font-bold"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";
import NotFound from "./NotFound.vue";
export default {
  props: ["notFound"],
  data() {
    return {
      originalData: data,
      jobData: [],
      title: "",
      location: "",
      nofound: this.notFound,
      isFullTime: false,
    };
  },
  methods: {
    filter() {
      if (this.title.length == 0) {
        this.jobData = this.originalData;
      }
      if (this.title.length > 0) {
        const newJobData = this.originalData.filter((job) =>
          job.position.toLocaleLowerCase().includes(this.title)
        );
        this.jobData = newJobData;
      }
      this.$emit("jobData", this.jobData);
    },
    locations() {
      if (this.location.length == 0) {
        this.jobData = this.originalData;
      }
      if (this.location.length > 0) {
        const newJobData = this.originalData.filter((loc) =>
          loc.location.toLocaleLowerCase().includes(this.location)
        );
        this.jobData = newJobData;
      }
      this.$emit("jobData", this.jobData);
    },
    fullTime() {
      this.isFullTime = !this.isFullTime;
      if (this.isFullTime == true) {
        const newJobData = this.originalData.filter(
          (contr) => contr.contract == "Full Time"
        );
        this.jobData = newJobData;
        console.log();
      } else {
        this.jobData = this.originalData;
      }
      this.$emit("jobData", this.jobData);
    },
  },
  mounted() {
    this.jobData = this.originalData;
  },
};
</script>

<style scoped></style>
