<template>
  <div class="flex items-center justify-center w-fit">
    <input
      type="checkbox"
      v-model="val"
      @click="toggle"
      id="toggle"
      class="hidden"
    />
    <label
      for="toggle"
      class="w-12 h-6 bg-white rounded-xl flex items-center px-1 cursor-pointer"
    ></label>
  </div>
</template>

<script>
import mapGetters from "vuex";

export default {
  data() {
    return {
      val: false,
    };
  },
  methods: {
    toggle() {
      this.$emit("value", this.val);
    },
  },
  mounted() {},
};
</script>

<style scoped>
label::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #5964e0;
  border-radius: 50%;
  transition: 0.3s;
}
input:checked + label::before {
  transform: translateX(26px);
}
</style>
