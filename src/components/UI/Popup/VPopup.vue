<template>
  <div :class="popup === false ? 'popup' : 'popup active'">
    <slot></slot>
    <div class="popup_body">
      <div class="popup_substrate"></div>
      <div class="popup_content">
        <div class="popup_close" @click="popupToggle">
          <VSvg id="close" width="20" height="20" />
        </div>
        <slot name="content"></slot>
      </div>
    </div>
    <div @click="popupToggle" class="popup_button"><slot name="btn"></slot></div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import VSvg from '../SVG/VSvg.vue';
  const props = defineProps({
    popup: {
      type: Function,
    },
    popupToggle: {
      type: Function,
    },
  });
</script>

<style lang="scss" scoped>
  .popup {
    &.active {
      .popup_body {
        visibility: visible;
        opacity: 1;
      }
    }
    &_close {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
    &_body {
      z-index: 400;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all ease 0.4s;
      opacity: 0;
      visibility: hidden;
    }
    &_substrate {
      z-index: -1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(black, 0.6);
    }
    &_content {
      background: #ffffff;
      padding: 0px 95px;
      padding-top: 47px;
      padding-bottom: 32px;
      position: relative;

      z-index: 22;
    }
  }
  @media (max-width: 668px) {
    .popup {
      &_content {
        padding: 0px 20px;
        padding-top: 47px;
        padding-bottom: 15px;
        width: 100%;
        height: 100%;
      }
      &_content {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
</style>
