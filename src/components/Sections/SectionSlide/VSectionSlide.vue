<template>
  <section class="sectionSlide">
    <VFigure :color="figure" />
    <div class="sectionSlide_img">
      <VCenteredItem :path="path" :webp="webp" />
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
  import VFigure from '@/components/UI/Figure/VFigure.vue';
  import VCenteredItem from '@comps/UI/CenteredItem/VCenteredItem.vue';
  const props = defineProps({
    figure: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },

    webp: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .sectionSlide {
    position: relative;
    height: 100%;
    scroll-snap-align: start;
    z-index: 1;
    overflow: hidden;
  }

  @media (max-width: 1246px) {
    .sectionSlide {
      &_img {
        display: none;
      }
    }
  }
</style>
