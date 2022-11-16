<template>
  <div class="footer">
    <VPopup :popup="popup" :popupToggle="popupToggle">
      <template v-slot:content><FormsFeedback :popupToggle="popupToggle" /></template>
      <template v-slot:btn> <VSectionFeedback /></template>
    </VPopup>

    <div class="footer_row">
      <div class="footer_logo">
        <div class="footer-logo_image">
          <img :src="footerLogo" alt="footerLogo" />
        </div>
      </div>

      <div class="footer_sub">
        <VContainer width="1162">
          <div class="footer-sub_row">
            <div class="footer-sub_text">© 2019 blakk</div>
            <div class="footer-sub_icons">
              <VSvg class="footer-sub_svg" id="face" width="13" height="28" />
              <VSvg class="footer-sub_svg" id="inst" width="21" height="28" />
            </div>
          </div>
        </VContainer>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VContainer from '../UI/Container/VContainer.vue';
  import footerLogo from '../Image/logoFooter.png';
  import VSvg from '../UI/SVG/VSvg.vue';
  import VSectionFeedback from '../Sections/Feedback/VSectionFeedback.vue';
  import VPopup from '../UI/Popup/VPopup.vue';
  import FormsFeedback from '../UI/Forms/FormsFeedback.vue';
  import {ref} from 'vue';
  const popup = ref(false);
  const popupToggle = () => {
    popup.value = !popup.value;
  };
</script>

<style lang="scss" scoped>
  .footer {
    scroll-snap-align: end;
    background-color: black;
    height: auto;
    position: relative;
    &_row {
      display: grid;
      background-color: black;
      grid-template-rows: 110px 60px;
      grid-auto-rows: 200px;
    }
    &_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    &_sub {
      height: 100%;
      border-top: 1px solid #606060;
    }
    &-sub {
      &_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        gap: 10px;
      }
      &_text {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 36px;
        color: #ffffff;
      }
      &_icons {
        display: flex;
        align-items: center;
        gap: 23px;
      }
      &_svg {
        &:last-child {
          height: 25px;
        }
      }
    }
    &-logo {
      &_image {
        width: 105px;
        height: 30px;
        position: relative;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  @media (min-width: 1550px) {
    .footer {
      scroll-snap-align: start;
    }
  }
</style>
