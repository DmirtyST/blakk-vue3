<!-- @format -->

<template>
  <VSectionSreen />
  <VSectionBanner />
  <component
    :figure="item.color"
    v-for="item in dataSections"
    :key="item.id"
    :is="item.section"
    :flex="item.flex"
    :path="item.path"
  >
    <VGrid>
      <VItemSectionImg
        :path="item.path"
        :id="item.id"
        :position="item.position"
        :src="item.src"
        :color="item.color"
      />
      <VItemSection :id="item.id" :color="item.color" :grid="item.grid" />
    </VGrid>
  </component>
</template>

<script setup>
  import VSectionBanner from '../components/Sections/Banner/VSectionBanner.vue';
  import VSectionSreen from '../components/Sections/Screen/VSectionSreen.vue';
  import VSectionSlide from '../components/Sections/SectionSlide/VSectionSlide.vue';
  import VGrid from '../components/UI/Grid/VGrid.vue';
  import VItemSection from '../components/UI/ItemSections/VItemsSection.vue';
  import bot1 from '../components/Image/bot1.png';
  import bot2 from '../components/Image/bot2.png';
  import bot3 from '../components/Image/bot3.png';
  import bot4 from '../components/Image/bot4.png';
  import bot5 from '../components/Image/bot5.png';
  import slide1 from '../components/Image/slide1.png';
  import slide2 from '../components/Image/slide2.png';
  import slide3 from '../components/Image/slide3.png';
  import slide4 from '../components/Image/slide4.png';
  import slide5 from '../components/Image/slide5.png';

  import VItemSectionImg from '../components/UI/ItemSections/VItemsSectionImg.vue';
  const dataSections = [
    {
      id: 1,
      section: VSectionSlide,
      color: '#996750',
      path: bot1,
      src: slide1,
      flex: 'start',
    },
    {
      id: 2,
      section: VSectionSlide,
      grid: 'reverse',
      color: '#4D4C4C',
      path: bot2,
      src: slide2,
      position: 'right',
      flex: 'end',
    },
    {
      id: 3,
      section: VSectionSlide,
      color: '#345E8F',
      path: bot3,
      src: slide3,
    },
    {
      id: 4,
      section: VSectionSlide,
      grid: 'reverse',
      color: '#B72C4E',
      path: bot4,
      src: slide4,
      position: 'right',
    },
    {
      id: 5,
      section: VSectionSlide,
      color: '#5CA07A',
      path: bot5,
      src: slide5,
    },
  ];
</script>
<style lang="scss" scoped></style>
