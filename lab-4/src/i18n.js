import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'

const i18n = createI18n({
    legacy: false,
    locale: 'ua',
    fallbackLocale: 'en',
    messages: { en, ua },
    modifiers: {
        exclaim: (str) => `${str}!!!`
    }
})

export default i18n