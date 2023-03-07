<template>
  <div ref="item" :class="isVisible === false ? 'itemSection' : 'itemSection active'">
    <div class="itemSection_title">
      <VHtag :squareActive="true" :square="color" size="xxl">Custom</VHtag>
    </div>
    <div class="itemSection_sub">
      <VHtag size="md">blakk C</VHtag>
      <span><VHtag size="md">like a secret custom #</VHtag></span>
    </div>
    <div class="itemSection_btn">
      <VButton :icon="false">заказать</VButton>
      <VButton color="transper">ПОДРОБНЕЕ</VButton>
    </div>
  </div>
</template>

<script setup>
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VButton from '@comps/UI/Button/VButton.vue';
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
    padding-right: 108px;
    padding-bottom: 80px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all ease 1s;
    &_title {
      margin-bottom: 120px;
      transform: translateX(-100%) translateY(-120%);
      transition: all ease 2s;
      opacity: 0;
    }
    &.active {
      transition: all ease 1.5s;
      transform: translateY(-0%);
      opacity: 1;

      .itemSection_title {
        opacity: 1;
        transition: all ease 2s;
        transform: translateX(-0%) translateY(-0%);
      }
    }
    &_row {
      display: flex;
      flex-direction: column;
    }

    &_sub {
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      span {
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }
    &_btn {
      display: flex;
      flex-direction: column;
      gap: 20px;
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
      padding-bottom: 10px;
      &_title {
        margin-bottom: 60px;
      }
    }
  }
  @media (max-width: 676px) {
    .itemSection {
      align-items: flex-start;
      text-align: start;
      padding-bottom: 0px;
      &_title {
        align-items: flex-start;
        margin-bottom: 35px;
      }
      &_sub {
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    }
  }
</style>
