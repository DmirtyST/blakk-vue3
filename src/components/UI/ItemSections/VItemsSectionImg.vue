<template>
  <div :style="{'background-color': color}" :class="['itemImg', `itemImg_${position}`]">
    <div class="itemImg_image">
      <VCenteredItem :path="path" />
    </div>
    <img class="itemImg_bg" :src="src" alt="slideImage" />
    <div class="itemImg_leters">
      <div v-if="id === 1" class="itemImg-leters_b">
        <img :src="BDesk" alt="" />
      </div>
      <div ref="img" v-if="id === 2" class="itemImg-leters_e">
        <img :src="EDesk" alt="" />
      </div>
      <div v-if="id === 3" class="itemImg-leters_s">
        <img :src="SDesk" alt="" />
      </div>
      <div v-if="id === 4" class="itemImg-leters_c">
        <img :src="CDesk" alt="" />
      </div>
      <div v-if="id === 5" class="itemImg-leters_g">
        <img :src="GDesk" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import VCenteredItem from '../CenteredItem/VCenteredItem.vue';
  import BDesk from '../../Image/BDesk.png';
  import EDesk from '../../Image/EDesk.png';
  import SDesk from '../../Image/SDesk.png';
  import CDesk from '../../Image/CDesk.png';
  import GDesk from '../../Image/GDesk.png';

  const props = defineProps({
    color: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
    path: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .itemImg {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    &_image {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 22;
    }
    &-leters {
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &_b {
        width: 433px;
        height: 473px;
      }
      &_e {
        width: 373px;
        height: 480px;
      }
      &_s {
        width: 366px;
        height: 454px;
      }
      &_c {
        width: 442px;
        height: 478px;
      }
      &_g {
        width: 356px;
        height: 379px;
      }
    }
    &_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 20% 5%;
      mix-blend-mode: normal;
      z-index: -1;
    }

    &_right {
      img {
        object-position: 100% 0%;
      }
    }
  }

  @media (max-width: 1500px) {
    .itemImg {
      padding-bottom: 0px;
    }
  }
  @media (min-width: 1246px) {
    .itemImg {
      &_image {
        display: none;
      }
    }
  }

  @media (max-width: 1246px) {
    .itemImg {
      &-leters {
        &_b {
          width: 329px;
          height: 358px;
        }
        &_e {
          width: 278px;
          height: 359px;
        }
        &_s {
          width: 287px;
          height: 357px;
        }
        &_c {
          width: 330px;
          height: 358px;
        }
        &_g {
          width: 335px;
          height: 358px;
        }
      }
      &_bg {
        object-position: 55% 5%;
      }
      &_right {
        img {
          object-position: 60% 0%;
        }
      }
    }
  }

  @media (max-width: 676px) {
    .itemImg {
      &-leters {
        &_b {
          width: 209px;
          height: 228px;
        }
        &_e {
          width: 178px;
          height: 229px;
        }
        &_s {
          width: 184px;
          height: 229px;
        }
        &_c {
          width: 210px;
          height: 228px;
        }
        &_g {
          width: 214px;
          height: 229px;
        }
      }

      &_bg {
        object-position: 0% 0%;
      }
      &_right {
        img {
          object-position: 100% 0%;
        }
      }
    }
  }
</style>
