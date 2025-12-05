<script setup>
import { ref, computed, inject } from 'vue'
import { useToast } from 'primevue/usetoast'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Toast from 'primevue/toast'
import Panel from 'primevue/panel'

const toast = useToast()
const copy = inject('copy')

const menuItems = ref([
  { label: 'Можливості', icon: 'pi pi-wallet' },
  { label: 'Підписка', icon: 'pi pi-dollar' },
  { label: 'Питання', icon: 'pi pi-question-circle' },
  { label: 'Підтримка', icon: 'pi pi-envelope' }
])

const features = ref([
  { title: 'Контроль витрат', desc: 'Бачте, куди йдуть гроші', icon: 'pi pi-chart-pie' },
  { title: 'Бюджетування', desc: 'Плануйте на місяць вперед', icon: 'pi pi-calendar' },
  { title: 'Синхронізація', desc: 'Підключення до банків', icon: 'pi pi-building-columns' }
])

const plans = ref([
  { name: 'Start', price: 0, users: 1, desc: 'Для особистого обліку', highlight: false },
  { name: 'Family', price: 5, users: 3, desc: 'Спільний бюджет', highlight: true },
  { name: 'Business', price: 15, users: 10, desc: 'Для ФОП та компаній', highlight: false }
])

const basePrice = ref(5)
const selectedPlanName = ref('Family')
const userCount = ref(1)

const selectPlan = (plan) => {
  plans.value.forEach(p => p.highlight = false)
  plan.highlight = true
  basePrice.value = plan.price
  selectedPlanName.value = plan.name

  toast.add({ severity: 'info', summary: 'План обрано', detail: `Ви перейшли на ${plan.name}`, life: 2000 })
}

const calculatedPrice = computed(() => userCount.value * basePrice.value)

const reviews = ref([
  { name: 'Андрій', text: 'Нарешті я почав відкладати гроші!', rating: 5 },
  { name: 'Олена', text: 'Зручно вести сімейний бюджет.', rating: 5 }
])

const form = ref({ name: '', email: '', phone: '', message: '', agree: false })
const errors = ref({})

const promoCode = 'MONEY2025'
const contactEmail = 'hello@financeguard.com'

const copyText = async (text, label) => {
  const success = await copy(text)
  if (success) {
    toast.add({ severity: 'success', summary: 'Успіх', detail: `${label} скопійовано!`, life: 3000 })
  }
}

const submitForm = () => {
  errors.value = {}
  let isValid = true

  if (!form.value.name) { errors.value.name = true; isValid = false }
  if (!form.value.email) { errors.value.email = true; isValid = false }
  if (!form.value.message) { errors.value.message = true; isValid = false }
  if (!form.value.agree) { errors.value.agree = true; isValid = false }

  if (isValid) {
    toast.add({ severity: 'success', summary: 'Відправлено', detail: 'Ми зв\'яжемось з вами!', life: 3000 })
    form.value = { name: '', email: '', phone: '', message: '', agree: false }
  } else {
    toast.add({ severity: 'error', summary: 'Помилка', detail: 'Перевірте поля форми', life: 3000 })
  }
}
</script>

<template>
  <Toast />

  <header>
    <div class="container">
      <Menubar :model="menuItems">
        <template #start>
          <span style="font-weight: bold; font-size: 1.5rem; color: #3b82f6;">FinanceGuard</span>
        </template>
        <template #end>
          <Button label="Увійти" icon="pi pi-user" />
        </template>
      </Menubar>
    </div>
  </header>

  <div class="hero">
    <h1>Ваші фінанси під контролем</h1>
    <p>FinanceGuard допомагає економити та інвестувати розумно</p>
    <Button label="Почати економити" size="large" severity="secondary" />
  </div>

  <div class="container">
    <section>
      <h2>Чому FinanceGuard?</h2>
      <div class="features-grid">
        <Card v-for="item in features" :key="item.title">
          <template #header>
            <div style="text-align: center; padding-top: 20px;">
              <i :class="item.icon" style="font-size: 2.5rem; color: #3b82f6"></i>
            </div>
          </template>
          <template #title>{{ item.title }}</template>
          <template #content>{{ item.desc }}</template>
        </Card>
      </div>
    </section>

    <section>
      <h2>Тарифи</h2>
      <div class="pricing-grid">
        <div v-for="plan in plans" :key="plan.name" :class="['price-card', { 'price-highlight': plan.highlight }]">
          <h3>{{ plan.name }}</h3>
          <p>{{ plan.desc }}</p>
          <div class="price">${{ plan.price }}/міс</div>
          <Button
              :label="plan.highlight ? 'Обрано' : 'Обрати план'"
              :outlined="!plan.highlight"
              @click="selectPlan(plan)"
          />
        </div>
      </div>

      <div class="calc-box">
        <h3>Калькулятор вартості ({{ selectedPlanName }})</h3>
        <label>Кількість користувачів: </label>
        <InputNumber v-model="userCount" showButtons :min="1" :max="100" />

        <p style="margin-top: 15px; font-weight: bold; font-size: 1.2rem;">
          Орієнтовна вартість: <span style="color: #3b82f6">${{ calculatedPrice }}</span> /міс
        </p>

        <div style="margin-top: 10px;">
          <span>Промокод: <b>{{ promoCode }}</b></span>
          <Button icon="pi pi-copy" text rounded @click="copyText(promoCode, 'Промокод')" />
        </div>
      </div>
    </section>

    <section>
      <h2>Відгуки</h2>
      <div class="reviews-grid">
        <Card v-for="review in reviews" :key="review.name" style="background: #eff6ff">
          <template #title>{{ review.name }}</template>
          <template #content>
            <p>"{{ review.text }}"</p>
            <i v-for="n in review.rating" :key="n" class="pi pi-star-fill" style="color: gold"></i>
          </template>
        </Card>
      </div>
    </section>

    <section>
      <h2>FAQ</h2>
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Чи є безкоштовна версія?</AccordionHeader>
          <AccordionContent>Так, план Start повністю безкоштовний.</AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Чи безпечні мої дані?</AccordionHeader>
          <AccordionContent>Ми використовуємо банківське шифрування.</AccordionContent>
        </AccordionPanel>
      </Accordion>
    </section>

    <section class="contact-form">
      <h2>Напишіть нам</h2>
      <Panel header="Контактна форма">
        <div class="field">
          <label>Ім'я *</label>
          <InputText v-model="form.name" :invalid="errors.name" />
        </div>
        <div class="field">
          <label>Email *</label>
          <InputText v-model="form.email" :invalid="errors.email" />
        </div>
        <div class="field">
          <label>Повідомлення *</label>
          <Textarea v-model="form.message" rows="3" :invalid="errors.message" />
        </div>
        <div class="field">
          <div style="display: flex; align-items: center; gap: 10px;">
            <Checkbox v-model="form.agree" binary :invalid="errors.agree" />
            <label style="margin: 0;">Погоджуюсь з політикою</label>
          </div>
        </div>
        <Button label="Надіслати" @click="submitForm" />
      </Panel>
    </section>
  </div>

  <footer>
    <p>&copy; 2025 FinanceGuard SaaS. Всі права захищено.</p>
    <p>
      Email: {{ contactEmail }}
      <Button icon="pi pi-copy" text rounded style="color: white" @click="copyText(contactEmail, 'Email')" />
    </p>
  </footer>
</template>