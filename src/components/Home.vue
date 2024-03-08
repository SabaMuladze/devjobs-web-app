<template>
  <div :class="{ dark: dark }" class="bg-[#F4F6F8]">
    <div class="dark:bg-[#121721] w-full min-h-[100vh]">
      <Filter @jobData="handleFilter" class="dark:bg-[#121721]" />
      <div class="pt-12 pb-6">
        <ul
          class="flex flex-wrap gap-y-12 justify-center gap-x-2 xl:grid grid-cols-3 w-fit mx-auto xl:gap-x-10 lg:pt-20 pb-14"
        >
          <li class="" v-for="(job, index) in jobs" :key="job.id">
            <div
              class="w-[330px] min-h-[200px] bg-[#fff] p-7 pt-9 flex flex-col justify-between relative rounded-md cursor-pointer dark:bg-[#19202D]"
            >
              <div
                :class="`w-[50px] h-[50px] flex items-center justify-center absolute p-1 top-[-25px] rounded-lg`"
                :style="{ backgroundColor: job.logoBackground }"
              >
                <img class="" :src="'../../public/' + job.logo" alt="" />
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
      notFound: false,
    };
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
  methods: {
    handleFilter(jobData) {
      this.jobs = jobData;
    },
  },
  mounted() {
    this.jobs = this.originalData;
  },
  components: {
    Filter,
    NotFound,
  },
};
</script>

<style scoped></style>
