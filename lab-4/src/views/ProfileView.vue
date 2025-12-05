<script setup>
import { useForm, useField, useFieldArray } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const schema = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  dateOfBirth: yup.date().required(),
  address: yup.string().required(),
  phones: yup.array().of(yup.string().required().min(10))
})

const { handleSubmit, resetForm, setFieldError } = useForm({
  validationSchema: schema,
  initialValues: { phones: [''] }
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: dateOfBirth, errorMessage: dobError } = useField('dateOfBirth')
const { value: address, errorMessage: addressError } = useField('address')
const { remove, push, fields } = useFieldArray('phones')

const onSubmit = handleSubmit((values) => {
  if (values.email === 'error@test.com') {
    setFieldError('email', 'Email already taken (Fake API)')
  } else {
    alert(JSON.stringify(values, null, 2))
  }
})
</script>

<template>
  <div class="card">
    <h2>{{ $t('profile.title.exclaim') }}</h2>
    <form @submit="onSubmit">
      <div>
        <label>{{ $t('profile.name') }}</label>
        <input v-model="name" type="text" />
        <span class="error">{{ nameError }}</span>
      </div>
      <div>
        <label>{{ $t('profile.email') }}</label>
        <input v-model="email" type="email" />
        <span class="error">{{ emailError }}</span>
      </div>
      <div>
        <label>{{ $t('profile.dob') }}</label>
        <input v-model="dateOfBirth" type="date" />
        <span class="error">{{ dobError }}</span>
      </div>
      <div>
        <label>{{ $t('profile.address') }}</label>
        <input v-model="address" type="text" />
        <span class="error">{{ addressError }}</span>
      </div>

      <div style="margin-top: 15px;">
        <label>{{ $t('profile.phones') }}</label>
        <div v-for="(field, idx) in fields" :key="field.key" class="phone-row">
          <input v-model="field.value" />
          <button type="button" @click="remove(idx)" class="btn btn-danger">X</button>
        </div>
        <button type="button" @click="push('')" class="btn btn-secondary">
          {{ $t('profile.add_phone') }}
        </button>
      </div>

      <div style="margin-top: 20px;">
        <button type="submit" class="btn">{{ $t('profile.submit') }}</button>
        <button type="button" @click="resetForm" class="btn btn-secondary">
          {{ $t('profile.reset') }}
        </button>
      </div>
    </form>
  </div>
</template>