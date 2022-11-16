<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 800px);
  }
  @media (max-width: 1246px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1026px);
    }
  }
  @media (max-width: 676px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: 300px 367px;
    }
  }
  @media (min-width: 1550px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 100vh);
    }
  }
</style>
