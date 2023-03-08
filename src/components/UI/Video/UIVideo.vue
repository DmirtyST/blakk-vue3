<template>
  <video
    preload="metadata"
    :class="play === false ? 'video' : 'video active'"
    :autoplay="play"
    loop
    muted
    type="video/mp4"
  >
    <source
      src="../../../assets/muzskoi-aromat-sauvage-ot-dior-s-dzonni-deppom-2016_uxQzO5Xh.mp4"
    />
  </video>
</template>

<script setup>
  const props = defineProps({
    play: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss" scoped>
  .video {
    position: absolute;
    left: 0;
    top: 2%;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: all ease 0.4s;
    &.active {
      transition: all ease 0.4s;
      opacity: 1;
    }
  }
</style>
