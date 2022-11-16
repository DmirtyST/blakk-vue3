<template>
  <div>
    <p :style="{color: color}" :class="['Typography', `Typography_${size}`]">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'sm',
    },
    sizeSpan: {
      type: String,
      default: 'sm',
    },
    color: {
      type: String,
      default: '#F9F9F9',
    },
  });
</script>

<style lang="scss" scoped>
  .TypographySpan {
    font-family: PlayfairDisplay;
    font-weight: 400;
    font-style: italic;
    &_lg {
      font-size: 21px;
      line-height: 32px;
    }
    &_xl {
      font-size: 24px;
      line-height: 32px;
    }
  }
  .Typography {
    font-family: Montserrat;

    &_xl {
      font-size: 24px;
      font-weight: 500;
      line-height: 48px;
    }
  }

  @media (max-width: 925px) {
    .Typography {
      &_xl {
        font-size: 24px;
        font-weight: 500;
        line-height: 48px;
      }
    }
  }

  @media (max-width: 676px) {
    .Typography {
      &_xl {
        font-size: 18px;
        font-weight: 500;
        line-height: 36px;
      }
    }
  }
</style>
