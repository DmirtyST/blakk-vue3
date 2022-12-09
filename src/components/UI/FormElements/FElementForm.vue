<template>
  <form  name="contact" method="POST" data-netlify="true" @submit.prevent="submit" class="form"><slot></slot></form>
</template>

<script setup>
  const props = defineProps({
    submit: {
      type: Function,
      reuired: false,
    },
  });
</script>

<style lang="scss" scoped></style>
