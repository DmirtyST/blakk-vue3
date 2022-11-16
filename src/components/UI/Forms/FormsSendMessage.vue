<template>
  <div class="messageSend">
    <div class="messageSend_title">Спасибо за Ваш заказ!</div>
    <div class="messageSend_desc">Мы свяжемся с Вами в ближайшее время</div>
    <VButton @click="popupToggle" color="black" :icon="false">ok</VButton>
  </div>
</template>

<script setup>
  import VButton from '../Button/VButton.vue';
  const props = defineProps({
    popupToggle: {
      type: Function,
    },
  });
</script>

<style lang="scss" scoped>
  .messageSend {
    font-family: Montserrat;
    text-align: center;
    color: #000000;
    &_title {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      margin-bottom: 10px;
    }
    &_desc {
      font-size: 14px;
      font-weight: 500;
      line-height: 26px;
      margin-bottom: 25px;
    }
  }
</style>
