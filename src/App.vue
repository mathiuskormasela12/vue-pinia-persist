<template>
  <div>
    <h1>Pinia Persisted Store</h1>
    <p>Count : {{ count }}</p>
    <button type="button" @click="increment">Increment</button>
    <button type="button" @click="decrement">Decrements</button>
    <button type="button" @click="handleLike">Like {{ likes }}</button>
  </div>
</template>

<script>
// import all modules
import { computed } from "vue";
import { useCounterStore, useLikeStore } from "./stores";

export default {
  name: "App",
  setup() {
    const counterStore = useCounterStore();
    const likeStore = useLikeStore();

    const count = computed(() => counterStore.count);
    const likes = computed(() => likeStore.likes);

    const increment = () =>
      counterStore.$patch((state) => {
        state.count++;
      });

    const decrement = () => {
      counterStore.decrement();
    };

    const handleLike = () => {
      likeStore.like();
    };

    return {
      count,
      increment,
      decrement,
      likes,
      handleLike,
    };
  },
};
</script>
