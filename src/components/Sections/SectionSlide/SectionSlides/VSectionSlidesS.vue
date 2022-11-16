<template>
  <div ref="item" :class="isVisible === false ? 'itemSection' : 'itemSection active'">
    <!--title-->
    <div class="itemSection_title">
      <VHtag :squareActive="true" :square="color" size="xxl">Style</VHtag>
      <VHtag size="md">Light of the night streets</VHtag>
    </div>
    <div
      ref="item"
      :class="isVisible === false ? 'itemSection_row' : 'itemSection_row active'"
    >
      <div class="itemSection_col">
        <div class="itemSection_sub">
          <VHtag size="md">blakk S</VHtag>
          <span><VHtag size="md">like a water from the Urd spring</VHtag></span>
        </div>
        <div class="itemSection_btn">
          <VButton :icon="false">заказать</VButton>
          <VButton color="transper">ПОДРОБНЕЕ</VButton>
        </div>
      </div>
      <div class="itemSection_col">
        <div class="itemSection_sub">
          <VHtag size="md">blakk S</VHtag>
          <span><VHtag size="md">like an Oliphant’s milk</VHtag></span>
        </div>
        <div class="itemSection_btn">
          <VButton :icon="false">заказать</VButton>
          <VButton color="transper">ПОДРОБНЕЕ</VButton>
        </div>
      </div>
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
    padding-left: 110px;
    position: relative;
    z-index: 22;
    &_title {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-bottom: 15px;
      transform: translateX(50%) translateY(-130%);
      opacity: 0;
      transition: 1.8s;
    }
    &.active {
      .itemSection_title {
        transform: translateX(-0%) translateY(-0%);
        opacity: 1;
        transition: 1.6s;
      }
    }
    &_col {
      transition: all ease 0.4s;

      &:first-child {
        transform: translate(100%);
      }
      &:last-child {
        transform: translateY(100%);
      }
    }
    &_row {
      display: flex;
      flex-direction: column;
      &.active {
        transition: all ease 1s;

        .itemSection_col {
          &:first-child {
            transform: translate(0%);
            transition: all ease 1s;
          }
          &:last-child {
            transform: translateY(0%);
            transition: all ease 1.5s;
          }
        }
      }
    }

    &_sub {
      margin-bottom: 15px;
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
      padding-left: 50px;
    }
  }
  @media (max-width: 876px) {
    .itemSection {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (max-width: 676px) {
    .itemSection {
      padding-bottom: 30px;
      &_title {
        gap: 10px;
        margin-bottom: 20px;
      }
      &_row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      &_btn {
        margin-bottom: 0px;
      }

      &_sub {
        margin-bottom: 20px;
        display: flex;
        max-width: 158px;
        flex-direction: column;
        gap: 5px;
        span {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 467px) {
    .itemSection {
      &_col {
        &:last-child {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
        }
      }
    }
  }
</style>
