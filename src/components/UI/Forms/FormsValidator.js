import {computed} from 'vue'
import {maxLength,helpers,required,minLength,} from '@vuelidate/validators'
const validNumber = helpers.regex(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm)
export const rules = computed(() => ({
    name: {
        required:helpers.withMessage('Обязательно для заполнения',required),
        maxLength: helpers.withMessage('Максимально количество символов - 20',maxLength(20)),
        minLength: helpers.withMessage('Минимальное количество символов - 5',minLength(5)),
      },
    number:{
        required:helpers.withMessage('Обязательно для заполнения',required),
        maxLength: helpers.withMessage('Введите коректный номер',maxLength(14)),
        regexp: helpers.withMessage('Введите коректный номер',validNumber),

    }
}))