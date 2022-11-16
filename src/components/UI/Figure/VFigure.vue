<template>
  <div class="wrapper">
    <div class="figure">
      <div class="figure_item">
        <div
          ref="figure"
          :style="[{opacity: 0.6}, {'background-color': `${color}`}]"
          :class="
            isVisible === false ? 'figure-item_element' : 'figure-item_element active'
          "
        ></div>
      </div>
      <div class="figure_item">
        <div
          ref="figure"
          :style="[{opacity: 0.6}, {'background-color': `${color}`}]"
          :class="
            isVisible === false ? 'figure-item_element' : 'figure-item_element active'
          "
        ></div>
        <div
          ref="figure"
          :style="[{opacity: 0.5}, {'background-color': `${color}`}]"
          :class="
            isVisible === false ? 'figure-item_element' : 'figure-item_element active'
          "
        ></div>
      </div>
      <div class="figure_item">
        <div
          ref="figure"
          :style="[{opacity: 0.6}, {'background-color': `${color}`}]"
          :class="
            isVisible === false ? 'figure-item_element' : 'figure-item_element active'
          "
        ></div>
        <div
          ref="figure"
          :style="[{opacity: 0.3}, {'background-color': `${color}`}]"
          :class="
            isVisible === false ? 'figure-item_element' : 'figure-item_element active'
          "
        ></div>
        <div
          ref="figure"
          :style="[{opacity: 0.8}, {'background-color': `${color}`}]"
          :class="
            isVisible === false ? 'figure-item_element' : 'figure-item_element active'
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useIntersectionObserver} from '@vueuse/core';
  import {ref} from 'vue';
  const props = defineProps({
    color: {
      type: String,
      default: 'red',
    },
  });
  const figure = ref(null);
  const isVisible = ref(false);
  const {stop} = useIntersectionObserver(
    figure,
    ([{isIntersecting}], observerElement) => {
      isVisible.value = isIntersecting;
      if (isIntersecting) {
        stop();
      }
    },
  );
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .figure {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    z-index: 20;
    bottom: 60px;

    transform: rotate(45deg);
    &_item {
      height: 100px;
      display: flex;
      overflow: hidden;
      transition: all ease 0.4s;
    }
    &-item {
      &_element {
        position: relative;
        mix-blend-mode: normal;
        background-color: #996750;
        width: 100px;
        height: 100px;
        transition: all ease 0.6s;
        opacity: 0;
        left: -100%;

        &.active {
          transition: all ease 0.6s;
          opacity: 1;
          left: 0;
        }
      }
    }
  }

  @media (max-width: 692px) {
    .figure {
      display: none;
    }
  }
</style>
