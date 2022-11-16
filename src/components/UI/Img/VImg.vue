<template>
  <img
    ref="img"
    v-if="isVisible === true"
    :class="['img', `img_${ps}`]"
    :src="sourse"
    alt="img"
  />
  <img
    ref="img"
    v-if="isVisible === false"
    :class="['img', `img_${ps}`]"
    :data-src="sourse"
    alt="img"
  />
</template>

<script setup>
  import {useIntersectionObserver} from '@vueuse/core';
  import {ref} from 'vue';
  const img = ref(null);
  const isVisible = ref(false);
  const {stop} = useIntersectionObserver(img, ([{isIntersecting}], observerElement) => {
    isVisible.value = isIntersecting;
    if (isIntersecting) {
      stop();
    }
  });
  const props = defineProps({
    ps: {
      type: String,
      default: '',
    },
    sourse: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    &_cover {
      object-fit: cover;
    }
    &_contain {
      object-fit: contain;
    }
  }
</style>
