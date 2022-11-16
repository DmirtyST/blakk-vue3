<template>
  <div class="controller">
    <TransitionGroup name="error">
      <div v-for="element of error" :key="element.$uid">
        <div class="error-message">
          {{ element.$message }}
        </div>
      </div>
    </TransitionGroup>
    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    error: {
      type: Array,
      required: false,
    },
  });
</script>

<style lang="scss" scoped>
  .controller {
    position: relative;
    padding-bottom: 4px;
  }
  .error-message {
    position: absolute;
    top: 100%;
    left: 0;
    color: red;
    font-size: 14px;
  }
  .error-enter-active,
  .error-leave-active {
    transition: all 0.5s ease;
  }
  .error-enter-from,
  .error-leave-to {
    opacity: 0;
  }
</style>
