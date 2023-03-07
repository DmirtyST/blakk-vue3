<template>
  <div class="banner">
    <swiper :pagination="pagination" :modules="modules" class="mySwiper" :speed="800">
      <swiper-slide v-for="item in data" :key="item.id"
        ><div class="banner_slide">
          <div class="banner-slide_substrate"></div>
          <picture>
            <source :srcset="item.webp" />
            <img :src="item.path" alt="slide" />
          </picture>
          <VContainer width="1177">
            <div class="banner-slide_row">
              <div class="banner-slide_shape">
                <img :src="item.shape" alt="slide" />
              </div>

              <VButton color="whiteSlide">заказать</VButton>
            </div>
          </VContainer>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>

<script setup>
  import {Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/scss';
  import 'swiper/scss/pagination';
  import 'swiper/scss/effect-fade';
  import slide from '@/assets/slide.png';
  import slideWebp from '@/assets/slide.webp';
  import shapeBanner from '@/assets/shabeBanner.png';
  import {Pagination} from 'swiper';
  import VButton from '@comps/UI/Button/VButton.vue';
  import VContainer from '@comps/UI/Container/VContainer.vue';
  const modules = [Pagination];
  const pagination = {
    clickable: true,
    type: 'bullets',
  };
  const data = [
    {id: 1, path: slide, shape: shapeBanner, webp: slideWebp},
    {id: 2, path: slide, shape: shapeBanner, webp: slideWebp},
    {id: 3, path: slide, shape: shapeBanner, webp: slideWebp},
    {id: 4, path: slide, shape: shapeBanner, webp: slideWebp},
    {id: 5, path: slide, shape: shapeBanner, webp: slideWebp},
    {id: 6, path: slide, shape: shapeBanner, webp: slideWebp},
  ];
</script>

<style lang="scss" scoped>
  .banner {
    height: auto;
    position: relative;
    z-index: 22;
    scroll-snap-align: end;
    &_slide {
      min-height: 606px;
      position: relative;
      z-index: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      }
    }
    &-slide {
      &_substrate {
        height: 100%;
        width: 50%;
        position: absolute;
        top: 0;
        left: 0;
        background: #5b5b5b;
        opacity: 0.5;
        mix-blend-mode: normal;
        z-index: 0;
      }
      &_shape {
        position: relative;
        width: 100%;
        height: 336px;
        mix-blend-mode: overlay;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          z-index: -1;
        }
      }

      &_row {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 38px;
      }
    }
  }
  @media (max-width: 676px) {
    .banner {
      &_slide {
        min-height: 667px;
        align-items: flex-start;
      }
      &-slide {
        &_row {
          padding-top: 55px;
          gap: 22em;
        }
        &_shape {
          height: 105px;
        }
      }
    }
  }
</style>
