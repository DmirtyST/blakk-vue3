<template>
  <video
    ref="videoPlayer"
    :class="play === false ? 'video' : 'video active'"
    loop
    muted
    type="video/mp4"
    preload="auto"
    id="player"
  >
    <source :src="videoBg" />
  </video>
</template>

<script setup>
  import {watchEffect, onMounted, onBeforeUnmount} from 'vue';
  import videoBg from '@/assets/screenVideo.mp4';

  const props = defineProps({
    play: {
      type: Boolean,
      default: false,
    },
  });

  let player = null;

  onMounted(() => {
    player = document.getElementById('player');
    watchEffect(() => {
      if (props.play) {
        player.play();
      } else {
        player.pause();
      }
    });
  });

  onBeforeUnmount(() => {
    player = null;
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
  }

  .video.active {
    transition: all ease 0.4s;
    opacity: 1;
    visibility: visible;
  }
</style>
