// ========== Counter Store
// import all modules
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      count: 0,
    };
  },
  actions: {
    decrement() {
      this.count--;
    },
  },
  //   If the persist is true, the store will be saved to the localstorage
  persist: true,
});
