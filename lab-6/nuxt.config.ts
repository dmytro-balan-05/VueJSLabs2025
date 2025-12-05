export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    future: {
        compatibilityVersion: 4,
    },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots'],
    site: {
        url: 'https://example.com',
        name: 'Nuxt Course Blog',
    },
    robots: {
        disallow: ['/api/*', '/admin'],
    }
})