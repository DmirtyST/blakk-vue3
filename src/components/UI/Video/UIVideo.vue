<template>
  <video
    id="player"
    :class="play === false ? 'video' : 'video active'"
    loop
    muted
    type="video/mp4"
    preload="metadata"
  >
    <source src="../../../assets/screenVideo.mp4" />
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
    z-index: 22;
    visibility: hidden;
    &.active {
      transition: all ease 0.4s;
      opacity: 1;
      visibility: visible;
    }
  }
</style>
