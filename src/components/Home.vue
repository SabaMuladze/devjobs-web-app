<template>
  <div :class="{ dark: dark }" class="bg-[#F4F6F8]">
    <div class="dark:bg-[#121721] w-full min-h-[100vh]">
      <div class="pt-16 pb-6">
        <ul
          class="flex flex-wrap gap-y-12 justify-center gap-x-2 xl:grid grid-cols-3 w-fit mx-auto xl:gap-x-10 lg:pt-20 pb-14"
        >
          <li class="" v-for="(job, index) in jobs" :key="job.id">
            <div
              class="w-[330px] h-[200px] bg-[#fff] p-7 flex flex-col justify-between relative dark:bg-[#19202D]"
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
                <h1>{{ job.position }}</h1>
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
export default {
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
  mounted() {
    this.jobs = data;
  },
};
</script>

<style scoped></style>
