<template>
  <h2
    :style="{
      color: color,
      'text-transform': uppercase,
    }"
    :class="['Htag', `Htag_${size}`]"
  >
    <slot></slot>
    <div
      v-if="squareActive === true"
      :style="[{'background-color': square}]"
      class="Htag_square"
    ></div>
  </h2>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'sm',
    },
    color: {
      type: String,
      default: '#ffffff',
    },
    square: {
      type: String,
      default: '',
    },
    squareActive: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss" scoped>
  .Htag {
    color: #ffffff;
    font-weight: 400;
    font-family: Montserrat;
    position: relative;
    z-index: 1;

    &_square {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 0;
      bottom: -7px;
      z-index: -1;
    }
    &_md {
      font-size: 24px;
      font-weight: 700;
      line-height: 40px;
    }
    &_xl {
      font-size: 48px;
      font-weight: 800;
      line-height: 48px;
    }
    &_xxl {
      font-size: 64px;
      font-weight: 800;
      line-height: 60px;
    }
  }

  @media (max-width: 800px) {
    .Htag {
      &_xxl {
        font-size: 48px;
      }
      &_square {
        width: 80px;
        height: 80px;
      }
    }
  }

  @media (max-width: 676px) {
    .Htag {
      &_xxl {
        font-size: 24px;
        line-height: 22px;
      }
      &_square {
        width: 50px;
        height: 50px;
      }
      &_md {
        font-size: 16px;
        line-height: 36px;
        font-weight: 700;
        line-height: 22px;
      }
    }
  }
  @media (max-width: 676px) {
    .Htag {
      &_xl {
        font-size: 36px;
        line-height: 36px;
      }
    }
  }
</style>
