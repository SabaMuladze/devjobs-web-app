import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      val: false,
    };
  },
  getters: {
    darkMode(state) {
      return state.val;
    },
  },
  mutations: {
    changeDarkValue(state) {
      return (state.val = !state.val);
    },
  },
  actions: {
    setDarkValue(context) {
      return context.commit("changeDarkValue");
    },
  },
});

export default store;
