import { defineStore } from 'pinia'
import { ref } from 'vue'
import i18n from '../i18n'

export const useSettingsStore = defineStore('settings', () => {
    const locale = ref('ua')

    const setLocale = (newLocale) => {
        locale.value = newLocale
        i18n.global.locale.value = newLocale
    }

    return { locale, setLocale }
}, {
    persist: {
        key: 'lab4-settings',
        pick: ['locale']
    }
})