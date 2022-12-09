<template>
  <form  name="contact" netlify @submit.prevent="submit" class="form"><slot></slot></form>
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
