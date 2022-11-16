<template>
  <div class="error">
    <div style="height: 200px; overflow: scroll; border: 1px solid black">
      <h1
        :class="[IsVisible === true ? 'active' : 'errors']"
        style="margin: 300px 0"
        ref="h1"
      >
        Hello world
      </h1>
    </div>
    {{ IsVisible }}
  </div>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import {useIntersectionObserver} from '@vueuse/core';
  const h1 = ref(null);
  const IsVisible = ref(false);
  useIntersectionObserver(h1, ([{isIntersecting}]) => {
    IsVisible.value = isIntersecting;
  });
</script>

<style lang="scss" scoped>
  .error {
    scroll-snap-align: start;
    height: 100vh;
    overflow: hidden;
    background-color: aliceblue;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .active {
    color: red;
    transition: all ease 0.6s;
  }

  .errors {
    color: black;
  }
</style>
