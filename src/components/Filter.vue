<template>
  <div
    class="flex items-center p-5 px-4 max-h-20 m-6 my-0 bg-white rounded-md relative bottom-8 justify-between md:hidden"
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
  <div class="relative m-auto max-w-[1110px] max-md:hidden">
    <div
      class="flex items-center px-4 max-h-20 m-6 my-0 bg-white rounded-md relative bottom-8 justify-between"
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
      <div class="p-5"></div>
      <div class="p-5"></div>
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
