<template>
  <button :type="type" :disabled="disabled" :class="['btn', `btn_${color}`]">
    <div class="btn_controll">
      <div><slot></slot></div>
      <VSvg v-if="icon === true" class="btn_svg" width="30" height="20" id="rightArrow" />
    </div>
  </button>
</template>

<script setup>
  import VSvg from '../SVG/VSvg.vue';

  const props = defineProps({
    label: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'white',
    },
    disabled: {
      type: Boolean,
      require: false,
    },
    type: {
      type: String,
      default: 'submit',
    },
    icon: {
      type: Boolean,
      default: true,
    },
  });
</script>

<style lang="scss" scoped>
  .btn {
    padding: 12px 0px;
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    font-family: Montserrat;
    text-transform: uppercase;
    width: 255px;
    display: flex;
    flex-direction: column;
    align-items: center;
    fill: #000000;
    position: relative;
    z-index: 1;
    cursor: pointer;
    &_white {
      transition: all ease 0.6s;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #ffffff;
        transition: all ease 0.6s;
        z-index: -1;
        box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.75);
      }
      &:hover {
        fill: #ffffff;
        color: #ffffff;

        transition: all ease 0.6s;
        &::before {
          width: 0%;
          transition: all ease 0.6s;
        }
      }
    }
    &_svg {
      height: 20px;
    }
    &_controll {
      display: flex;
      align-items: center;
      gap: 17px;
    }
    &_transper {
      background-color: transparent;
      border: 1px solid #ffffff;
      color: #ffffff;
      padding: 12px;
      fill: #ffffff;

      &::before {
        content: '';
        position: absolute;
        width: 0%;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #ffffff;
        transition: all ease 0.6s;
        z-index: -1;
      }

      &:hover {
        color: #000000;
        fill: #000000;
        transition: all ease 0.6s;
        &::before {
          width: 100%;
          transition: all ease 0.6s;
        }
      }
    }
    &_white {
      padding: 12px;
    }
    &_black {
      background: #000000;
      border: 1px solid #ffffff;
      color: #ffffff;
      padding: 22px 0px;
      width: 350px;
      transition: all ease 0.6s;
      opacity: 1;
      &:hover {
        transition: all ease 0.6s;
        opacity: 0.7;
      }
    }
    &_whiteSlide {
      max-width: 220px;
      padding: 12 0px;
      color: #000000;
      background-color: #ffffff;
      transition: all ease 0.4s;
      &:hover {
        transition: all ease 0.4s;
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 800px) {
    .btn {
      width: 210px;

      &_controll {
        display: flex;
        align-items: center;
        gap: 17px;
      }
      &_black {
        width: 350px;
      }
    }
  }
  @media (max-width: 776px) {
    .btn {
      &_black {
        width: 450px;
      }
    }
  }
  @media (max-width: 676px) {
    .btn {
      width: unset;
      max-width: 158px;
      font-size: 14px;
      &_controll {
        gap: 9px;
      }

      &_white {
        padding: 12px 40px;
      }
      &_transper {
        padding: 12px 8px;
      }
      &_whiteSlide {
        max-width: 210px;
        width: 210px;
        padding: 12 40px;
      }
      &_black {
        max-width: unset;
        width: 100%;
        padding: 12px 5px;
      }
    }
  }
</style>
