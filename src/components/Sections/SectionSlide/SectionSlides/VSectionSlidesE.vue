<template>
  <div ref="item" :class="isVisible === false ? 'itemSection' : 'itemSection active'">
    <div class="itemSection_title">
      <VHtag :squareActive="true" :square="color" size="xxl">Eng ine</VHtag>
      <VHtag size="md">Fuel of your life’s endeavors</VHtag>
    </div>
    <div class="itemSection_sub">
      <VHtag size="md">blakk E</VHtag>
      <span><VHtag size="md">like a lair of the old bear</VHtag></span>
    </div>
    <div class="itemSection_btn">
      <VButton :icon="false">заказать</VButton>
      <VButton color="transper">ПОДРОБНЕЕ</VButton>
    </div>
  </div>
</template>

<script setup>
  import VHtag from '../../../UI/Htag/VHtag.vue';
  import VButton from '../../../UI/Button/VButton.vue';
  import {ref} from 'vue';
  import {useIntersectionObserver} from '@vueuse/core';
  const item = ref(null);
  const isVisible = ref(true);
  const {stop} = useIntersectionObserver(item, ([{isIntersecting}], observerElement) => {
    isVisible.value = isIntersecting;
    if (isIntersecting) {
      stop();
    }
  });
  const props = defineProps({
    color: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .itemSection {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    text-align: end;
    z-index: 22;
    padding-right: 110px;
    padding-bottom: 80px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all ease 1s;
    &.active {
      transition: all ease 1.5s;
      transform: translateY(-0%);
      opacity: 1;

      .itemSection_title {
        transform: translateX(0%) translateY(-0%);
        opacity: 1;
        transition: all ease 1.8s;
      }
    }
    &_title {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: relative;
      z-index: 22;
      gap: 25px;
      margin-bottom: 55px;
      transition: all ease 1.8s;
      transform: translateX(30%) translateY(-95%);
      opacity: 0;
    }
    &_sub {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      span {
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }
    &_btn {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-bottom: 25px;
    }
  }
  @media (max-width: 1246px) {
    .itemSection {
      padding-right: 50px;
    }
  }
  @media (max-width: 876px) {
    .itemSection {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  @media (max-width: 800px) {
    .itemSection {
      padding-bottom: 30px;
      &_title {
        gap: 20px;
        margin-bottom: 20px;
      }
      &_sub {
        margin-bottom: 15px;
        gap: 10px;
      }
    }
  }
  @media (max-width: 676px) {
    .itemSection {
      align-items: flex-start;
      text-align: start;
      padding-top: 20px;
      transform: translateY(-0%) translateX(-60%);

      &.active {
        transform: translateY(-0%) translateX(-0%);
        transition: all ease 1.5s;
      }
      &_title {
        align-items: flex-start;
      }
      &_sub {
      }
    }
  }
</style>
