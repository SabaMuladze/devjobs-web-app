<template>
  <div :class="{ dark: dark }" class="bg-[#F4F6F8]">
    <div class="dark:bg-[#121721] w-full min-h-[100vh]">
      <Filter @jobData="handleFilter" class="dark:bg-[#121721]" />
      <div class="pt-12 pb-6">
        <transition name="load" mode="out-in">
          <ul
            v-if="animate"
            class="flex flex-wrap gap-y-12 justify-center gap-x-2 xl:grid grid-cols-3 w-fit mx-auto xl:gap-x-10 pb-14"
          >
            <li class="" v-for="(job, index) in displayedItems" :key="job.id">
              <div
                class="w-[330px] min-h-[200px] bg-[#fff] p-7 pt-9 flex flex-col justify-between relative rounded-md cursor-pointer dark:bg-[#19202D]"
              >
                <div
                  :class="`w-[50px] h-[50px] flex items-center justify-center absolute p-1 top-[-25px] rounded-lg`"
                  :style="{ backgroundColor: job.logoBackground }"
                >
                  <img class="" :src="job.logo" alt="" />
                </div>
                <div class="flex flex-col gap-1">
                  <p class="flex items-center gap-1">
                    {{ job.postedAt }}
                    <span
                      class="h-1 w-1 rounded-full bg-[#6E8098] relative"
                    ></span>
                    {{ job.contract }}
                  </p>
                  <router-link
                    :to="{
                      path: '/details',
                      query: { id: job.id },
                    }"
                  >
                    <h1 class="hover:text-[#6E8098] cursor-pointer">
                      {{ job.position }}
                    </h1>
                  </router-link>
                  <p>{{ job.company }}</p>
                </div>
                <div>
                  <h2>{{ job.location }}</h2>
                </div>
              </div>
            </li>
          </ul>
        </transition>
        <button
          class="flex mx-auto px-4 py-3 font-bold text-white text-[16px] bg-[#5964E0] rounded-lg"
          v-if="showLoadMoreButton"
          @click="loadMore"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import data from "../../data.json";
import Filter from "./Filter.vue";
import NotFound from "./NotFound.vue";
export default {
  data() {
    return {
      jobs: [],
      originalData: data,
      startIndex: 0,
      itemsPerPage: 9,
      animate: false,
    };
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
    displayedItems() {
      return this.jobs.slice(0, this.startIndex + this.itemsPerPage);
    },
    showLoadMoreButton() {
      return this.startIndex + this.itemsPerPage < this.jobs.length;
    },
  },
  methods: {
    handleFilter(jobData) {
      this.jobs = jobData;
    },
    loadMore() {
      this.startIndex += this.itemsPerPage;
    },
  },
  mounted() {
    this.jobs = this.originalData;
    this.animate = true;
  },
  components: {
    Filter,
    NotFound,
  },
};
</script>

<style scoped>
.load-enter-active,
.load-leave-active {
  transition: all 0.8s;
}
.load-enter-from {
  opacity: 0.2;
}
.load-enter-to {
  opacity: 1;
}
</style>
