<template>
  <div class="screen">
    <BaseHeader />
    <UIVideo :play="play" />
    <picture>
      <source :srcset="`${screenMobileWebp} 550w`" media="(max-width:550px)" />
      <source :srcset="`${screenMobile} 550w`" media="(max-width:550px)" />
      <source :srcset="`${screenTabletWebp} 768w`" media="(max-width:768px)" />
      <source :srcset="`${screenTablet} 768w`" media="(max-width:768px)" />
      <source :srcset="screenWebp" />
      <VImg class="screen_image" ps="cover" :sourse="screen" alt="screenBg" />
    </picture>
    <VContainer width="1200">
      <div class="screen_row">
        <div class="screen_item">
          <VHtag size="xl">blakk-</VHtag>
          <VTypography size="xl"
            >бренд, як стиль життя, що об'єднує різних чоловіків незалежно від їх роду
            занять та захоплень.
          </VTypography>
          <div @click="activePlayer" class="screen_button">
            <VSvg id="play" width="86" height="80" />
          </div>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
  import VSvg from '@comps/UI/SVG/VSvg.vue';
  import VContainer from '@comps/UI/Container/VContainer.vue';
  import screen from '@/assets/screen.png';
  import screenTablet from '@/assets/screenTablet.png';
  import screenMobile from '@/assets/screenMobile.png';
  import screenWebp from '@/assets/screen.webp';
  import screenTabletWebp from '@/assets/screenTablet.webp';
  import screenMobileWebp from '@/assets/screenMobile.webp';
  import BaseHeader from '@comps/Layout/BaseHeader.vue';
  import VImg from '@comps/UI/Img/VImg.vue';
  import {ref, defineAsyncComponent} from 'vue';
  const UIVideo = defineAsyncComponent({
    loader: () => import('@comps/UI/Video/UIVideo.vue'),
  });
  let play = ref(false);

  let activePlayer = () => {
    play.value = !play.value;
  };
</script>

<style lang="scss" scoped>
  .screen {
    min-height: 900px;
    position: relative;
    z-index: 1;
    &_image {
      object-position: left top;
      z-index: -1;
    }

    &_row {
      height: 100vh;
      padding-top: 120px;
      width: 100%;
      display: flex;
      align-items: center;
      scroll-snap-align: start;
      position: relative;
    }
    &_button {
      margin-top: 90px;
      text-align: center;
      padding-left: 20px;
      position: relative;
      cursor: pointer;
      z-index: 22;
    }
    &_item {
      width: 80%;
      display: flex;
      flex-direction: column;
      padding-left: 190px;
      gap: 12px;
    }
  }
  @media (max-width: 1236px) {
    .screen {
      min-height: auto;
      &_row {
        height: auto;
        min-height: 1024px;
        padding-top: 0px;
        padding-bottom: 10px;
      }
      &_button {
        margin-top: 85px;
        padding-left: 0px;
      }
    }
  }

  @media (max-width: 1100px) {
    .screen {
      &_item {
        width: 100%;
        padding-left: 38px;
        gap: 12px;
      }
    }
  }

  @media (max-width: 676px) {
    .screen {
      &_row {
        height: 667px;
        padding: 0 5px;
        padding-bottom: 50px;
      }
      &_item {
        padding-left: 0px;
        gap: 5px;
      }
      &_button {
        margin-top: 75px;
      }
    }
  }
</style>
