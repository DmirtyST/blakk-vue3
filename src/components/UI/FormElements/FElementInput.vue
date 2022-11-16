<template>
  <div>
    <label class="label" :for="name">{{ label }}</label>

    <input
      class="input"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :type="type"
      @input="updateValue"
    />
  </div>
</template>

<script setup>
  const emits = defineEmits(['update:value']);
  const props = defineProps({
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: false,
    },
    class: {
      type: String,
      default: '',
    },
  });
  const updateValue = (e) => {
    emits('update:value', e.target.value);
  };
</script>

<style lang="scss" scoped>
  .input {
    padding: 12px 20px;
    border: 1px solid #9b9b9b;
    width: 100%;
    min-height: 50px;
    margin-top: 12px;
  }

  .label {
    padding-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
    text-align: left;
    color: #000000;
  }
</style>
