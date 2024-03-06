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
        class="flex items-center px-4 max-h-20 my-0 bg-white rounded-md relative bottom-8 dark:bg-[#19202D] lg:mx-6"
      >
        <div class="p-5 border-r-[#979797] border-r-[1px]">
          <input
            class="outline-none h-[30px] bg-inherit w-full dark:text-white"
            type="text"
            placeholder="Filter by title..."
            v-model="title"
            @input="filter"
          />
        </div>
        <div class="p-5 border-r-[#979797] border-r-[1px]">
          <input
            class="outline-none h-[30px] bg-inherit w-full dark:text-white"
            type="text"
            placeholder="Filter by location..."
            v-model="title"
            @input="filter"
          />
        </div>
        <div class="p-5 flex items-center gap-2 w-auto">
          <input
            class="h-[24px] w-[24px] bg-inherit dark:text-white"
            type="checkbox"
            v-model="title"
            @input="filter"
          />
          <p>Full Time</p>
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
      nofound: this.notFound,
    };
  },
  methods: {
    filter() {
      if (this.title.length > 0) {
        const newJobData = this.originalData.filter((job) =>
          job.position.toLocaleLowerCase().includes(this.title)
        );
        if (newJobData.length > 0) {
          this.jobData = newJobData;
        } else {
          this.jobData = this.originalData;
        }
      } else {
        this.jobData = this.originalData;
      }
      this.$emit("jobData", this.jobData);
    },
  },
  mounted() {
    this.jobData = this.originalData;
    console.log(this.notFound);
  },
};
</script>

<style scoped></style>
