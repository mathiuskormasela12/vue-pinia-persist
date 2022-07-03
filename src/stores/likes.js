// ========== Likes Store
// import all modules
import { defineStore } from "pinia";

export const useLikeStore = defineStore("likes", {
  state() {
    return {
      likes: 0,
    };
  },
  actions: {
    like() {
      this.likes++;
    },
  },
});
