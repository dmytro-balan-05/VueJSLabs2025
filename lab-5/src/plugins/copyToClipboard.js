export default {
    install: (app) => {
        app.config.globalProperties.$copy = async (text) => {
            try {
                await navigator.clipboard.writeText(text)
                return true
            } catch (err) {
                return false
            }
        }

        app.provide('copy', async (text) => {
            try {
                await navigator.clipboard.writeText(text)
                return true
            } catch (err) {
                return false
            }
        })
    }
}