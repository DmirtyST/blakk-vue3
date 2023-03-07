<template>
  <div class="wrapper">
    <main class="page">
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
  import BaseFooter from './BaseFooter.vue';
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100vh;
    padding-top: 2px;
    overflow: auto;
    scroll-snap-type: y mandatory;
  }
  .page {
    flex: 1 1 auto;
  }
  @media (max-width: 1500px) {
    .wrapper {
      height: auto;
      padding-top: 0px;
      overflow: auto;
      overflow-x: hidden;
      scroll-snap-type: unset;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
</style>
