<template>
  <div :class="['centeredItem', `centeredItem_${flex}`]">
    <div
      ref="item"
      :class="isVisible === true ? ' centeredItem_image' : 'centeredItem_image-active'"
    >
      <img :src="path" :srcset="webp" width="160" height="520" :alt="alts" />
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import {useIntersectionObserver} from '@vueuse/core';
  const item = ref(null);
  const isVisible = ref(false);
  const {stop} = useIntersectionObserver(item, ([{isIntersecting}], observerElement) => {
    isVisible.value = isIntersecting;
    if (isIntersecting) {
      stop();
    }
  });

  const props = defineProps({
    path: {
      type: String,
      default: '',
    },
    webp: {
      type: String,
      default: '',
    },
    alts: {
      type: String,
      default: 'centeredImage',
    },
    flex: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .centeredItem {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &_image {
      position: relative;
      z-index: 22;
      width: 160px;
      height: 520px;
      filter: drop-shadow(30px 10px 30px rgba(0, 0, 0, 0.3));
      transition: all ease 1s;
      opacity: 1;
      top: 0%;
      transform: scale(1);
      &-active {
        transition: all linear 1s;
        opacity: 0;
        top: 100%;

        transform: scale(0.3);
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 676px) {
    .centeredItem {
      &_image {
        width: 104px;
        height: 295px;
        bottom: -15px;
        top: 5%;
        transition: all linear 1.1s;
        &-active {
          transition: all linear 1.1s;
        }
      }
    }
  }
</style>
