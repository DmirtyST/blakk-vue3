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
    :webp="item.webp"
  >
    <VGrid>
      <VItemSectionImg
        :path="item.path"
        :id="item.id"
        :position="item.position"
        :src="item.src"
        :srcWepb="item.srcWepb"
        :color="item.color"
      />
      <VItemSection :id="item.id" :color="item.color" :grid="item.grid" />
    </VGrid>
  </component>
</template>

<script setup>
  import VSectionBanner from '@comps/Sections/Banner/VSectionBanner.vue';
  import VSectionSreen from '@comps/Sections/Screen/VSectionSreen.vue';
  import VSectionSlide from '@comps/Sections/SectionSlide/VSectionSlide.vue';
  import VGrid from '@comps/UI/Grid/VGrid.vue';
  import VItemSection from '@comps/UI/ItemSections/VItemsSection.vue';
  import bot1 from '@/assets/bot1.png';
  import bot2 from '@/assets/bot2.png';
  import bot3 from '@/assets/bot3.png';
  import bot4 from '@/assets/bot4.png';
  import bot5 from '@/assets/bot5.png';
  import bot1Webp from '@/assets/bot1.webp';
  import bot2Webp from '@/assets/bot2.webp';
  import bot3Webp from '@/assets/bot3.webp';
  import bot4Webp from '@/assets/bot4.webp';
  import bot5Webp from '@/assets/bot5.webp';
  import slide1 from '@/assets/slide1.png';
  import slide2 from '@/assets/slide2.png';
  import slide3 from '@/assets/slide3.png';
  import slide4 from '@/assets/slide4.png';
  import slide5 from '@/assets/slide5.png';
  import slide1Wepb from '@/assets/slide1.webp';
  import slide2Wepb from '@/assets/slide2.webp';
  import slide3Wepb from '@/assets/slide3.webp';
  import slide4Wepb from '@/assets/slide4.webp';
  import slide5Wepb from '@/assets/slide5.webp';

  import VItemSectionImg from '@comps/UI/ItemSections/VItemsSectionImg.vue';
  const dataSections = [
    {
      id: 1,
      section: VSectionSlide,
      color: '#996750',
      path: bot1,
      src: slide1,
      srcWepb: slide1Wepb,
      flex: 'start',
      webp: bot1Webp,
    },
    {
      id: 2,
      section: VSectionSlide,
      grid: 'reverse',
      color: '#4D4C4C',
      path: bot2,
      src: slide2,
      srcWepb: slide2Wepb,
      position: 'right',
      flex: 'end',
      webp: bot2Webp,
    },
    {
      id: 3,
      section: VSectionSlide,
      color: '#345E8F',
      path: bot3,
      src: slide3,
      srcWepb: slide3Wepb,
      webp: bot3Webp,
    },
    {
      id: 4,
      section: VSectionSlide,
      grid: 'reverse',
      color: '#B72C4E',
      path: bot4,
      src: slide4,
      srcWepb: slide4Wepb,
      position: 'right',
      webp: bot4Webp,
    },
    {
      id: 5,
      section: VSectionSlide,
      color: '#5CA07A',
      path: bot5,
      src: slide5,
      srcWepb: slide5Wepb,
      webp: bot5Webp,
    },
  ];
</script>
<style lang="scss" scoped></style>
