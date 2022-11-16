<template>
  <div :class="['itemsSection', `itemsSection_${grid}`]">
    <VSectionSlidesB ref="item" v-if="id === 1" :color="color" />
    <VSectionSlidesE ref="item" v-if="id === 2" :color="color" />
    <VSectionSlidesS ref="item" v-if="id === 3" :color="color" />
    <VSectionSlidesC ref="item" v-if="id === 4" :color="color" />
    <VSectionSlidesG ref="item" v-if="id === 5" :color="color" />
  </div>
</template>

<script setup>
  import VSectionSlidesB from '../../Sections/SectionSlide/SectionSlides/VSectionSlidesB.vue';
  import VSectionSlidesE from '../../Sections/SectionSlide/SectionSlides/VSectionSlidesE.vue';
  import VSectionSlidesS from '../../Sections/SectionSlide/SectionSlides/VSectionSlidesS.vue';
  import VSectionSlidesC from '../../Sections/SectionSlide/SectionSlides/VSectionSlidesC.vue';
  import VSectionSlidesG from '../../Sections/SectionSlide/SectionSlides/VSectionSlidesG.vue';

  const props = defineProps({
    grid: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  });
</script>

<style lang="scss" scoped>
  .itemsSection {
    background: linear-gradient(180deg, #3f3f3f 0%, #1d1d1d 100%);
    display: flex;
    padding-top: 0px;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40px;
    &_reverse {
      grid-column-start: 1;
      grid-row-start: 1;
      padding-top: 50px;
      padding-bottom: 0px;
    }
  }

  @media (max-width: 960px) {
    .itemsSection {
      &_item {
        padding-left: 10px;
      }
    }
  }
  @media (max-width: 676px) {
    .itemsSection {
      &_reverse {
        grid-column-start: unset;
        grid-row-start: unset;
      }
    }
  }
  @media (max-width: 1500px) {
    .itemsSection {
      padding-top: 50px;
      padding-bottom: 0px;
      &_reverse {
        padding-bottom: 0px;
      }
    }
  }
  @media (min-width: 1550px) {
    .itemsSection {
      padding-top: 50px;
      padding-bottom: 0px;
      &_reverse {
        padding-top: 0px;
        padding-bottom: 0px;
      }
    }
  }
</style>
