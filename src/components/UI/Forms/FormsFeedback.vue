<template>
  <FElementForm v-if="sendMessage === false" :submit="submitForm" class="formFeedback">
    <FElementController :error="v.name.$errors" class="formFeedback_controll">
      <FElementInput
        v-model:value="v.name.$model"
        label="Ваше имя"
        class="formFeedback_input"
        name="name"
      />
    </FElementController>
    <FElementController :error="v.number.$errors" class="formFeedback_controll">
      <FElementInput
        v-model:value="v.number.$model"
        label="Ваше номер телефона"
        class="formFeedback_input"
        placeholder="+380 _ _ _ - _ _ - _ _"
        name="number"
      />
    </FElementController>
    <button type="submit" class="formFeedback_btn">Связаться</button>
  </FElementForm>
  <FormsSendMessage :popupToggle="popupToggle" v-if="sendMessage === true" />
</template>

<script setup>
  import {reactive, ref} from 'vue';
  import FElementForm from '../FormElements/FElementForm.vue';
  import FElementInput from '../FormElements/FElementInput.vue';
  import FElementController from '../FormElements/FElementController.vue';
  import {useVuelidate} from '@vuelidate/core';
  import {rules} from './FormsValidator';
  import FormsSendMessage from './FormsSendMessage.vue';
  const state = reactive({
    name: '',
    number: '+380',
  });
  const props = defineProps({
    popupToggle: {
      type: Function,
    },
  });
  const sendMessage = ref(false);
  const v = useVuelidate(rules, state);
  const submitForm = () => {
    v.value.$touch();
    if (v.value.$error) {
    } else {
      sendMessage.value = !sendMessage.value;
      setTimeout(() => {
        sendMessage.value = false;
        v.value.$reset();
      }, 1500);

      state.name = '';
      state.number = '+380';
    }
  };
</script>

<style lang="scss" scoped>
  .formFeedback {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &_input {
      width: 100%;
    }

    &_btn {
      min-height: 50px;
      margin-top: 20px;
      width: 100%;
      text-align: center;
      padding: 12px 0px;
      font-family: Montserrat;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 500;
      line-height: 26px;
      background: #000000;
      cursor: pointer;
    }
  }

  @media (max-width: 668px) {
    .formFeedback {
      min-width: auto;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
</style>
