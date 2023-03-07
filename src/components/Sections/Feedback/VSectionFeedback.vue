<template>
  <div class="feedback">
    <div class="feedback_substrate"></div>
    <div class="feedback_shape">
      <img :src="shape" alt="shape" />
    </div>
    <picture>
      <source :srcset="feedbackBgWebp" />
      <img class="feedback_bg" :src="feedbackBg" alt="feedbackB" />
    </picture>
    <VButton :icon="false" color="black">получить консультацию</VButton>
  </div>
</template>

<script setup>
  import feedbackBg from '@/assets/feedback.png';
  import feedbackBgWebp from '@/assets/feedback.webp';
  import shape from '@/assets/Shapefeedback.png';
  import VButton from '@comps/UI/Button/VButton.vue';
</script>

<style lang="scss" scoped>
  .feedback {
    min-height: 580px;
    padding: 0 15px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    &_substrate {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.8) 97.67%
      );
    }
    &_shape {
      width: 100%;
      height: 420px;
      position: absolute;
      z-index: 0;
      mix-blend-mode: overlay;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 0;
      }
    }
    &_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  }
  @media (max-width: 776px) {
    .feedback {
      min-height: 544px;

      &_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        object-position: 22%;
      }
    }
  }

  @media (max-width: 676px) {
    .feedback {
      min-height: 270px;

      &_shape {
        height: 220px;
      }
      &_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        object-position: 30% 5%;
      }
    }
  }
</style>
