<template>
  <div class="header">
    <div class="header_substrate"></div>

    <div class="header_row">
      <div class="header_logo">
        <img :src="logo" alt="Blakk" />
      </div>
      <div class="header_contacts">
        <div class="header-contacts_contact">
          <span class="header-contacts_svg"
            ><VSvg width="27" height="40" id="phone"
          /></span>
          <span class="header-contacts_mb"
            ><VSvg width="18" height="30" id="phoneMb"
          /></span>
          <a class="header-contacts_number" href="tel:+380636995996">
            +38(063) 699 59 96
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import logo from '@/assets/logo.png';
  import VSvg from '../UI/SVG/VSvg.vue';
</script>

<style lang="scss" scoped>
  .header {
    height: 185px;
    position: absolute;
    scroll-snap-type: start;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 17px;
    padding-right: 15px;
    padding-top: 10px;

    z-index: 222;
    &_substrate {
      position: absolute;
      width: 100%;
      height: 100px;
      background: #ffffff;
      top: 0;
      left: 0;
    }
    &_row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 5px;
      padding-left: calc((100% - 1139px) / 3.8 + 15px);
      padding-right: calc((100% - 1139px) / 2.3 + 15px);
    }
    &_contacts {
      padding-top: 20px;
      padding-bottom: 30px;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 22;
      gap: 91px;
    }
    &-contacts {
      &_number {
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
      }
      &_contact {
        display: flex;
        align-items: center;
        position: relative;
        gap: 30px;
      }
    }
    &_logo {
      width: 170px;
      height: 170px;
      position: relative;
      z-index: 22;
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
  @media (min-width: 1236px) {
    .header {
      &-contacts {
        &_mb {
          display: none;
        }
      }
    }
  }
  @media (max-width: 1236px) {
    .header {
      &-contacts {
        &_svg {
          display: none;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .header {
      &_logo {
        width: 132px;
        height: 132px;
      }
    }
  }
  @media (max-width: 676px) {
    .header {
      height: auto;
      background: #ffffff;
      padding-top: 0px;
      padding: 5px 0;
      padding-left: 17px;
      padding-right: 15px;
      &_logo {
        width: 66px;
        height: 66px;
      }
      &_substrate {
        display: none;
      }
      &_row {
        align-items: center;
      }
      &_contacts {
        padding-top: 0px;
        padding-bottom: 0px;
        gap: 40px;
      }

      &-contacts {
        &_contact {
          gap: 11px;
        }
        &_number {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
</style>
