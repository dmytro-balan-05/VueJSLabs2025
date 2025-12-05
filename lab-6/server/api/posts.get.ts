export default defineEventHandler((event) => {
    return [
        {
            id: 1,
            title: 'Nuxt 4: Що нового?',
            slug: 'nuxt-4-new',
            desc: 'Огляд нової структури папок та можливостей.',
            content: 'Nuxt 4 пропонує спрощену структуру app/...'
        },
        {
            id: 2,
            title: 'Nitro Server',
            slug: 'nitro-server',
            desc: 'Як працює серверний рушій у Nuxt.',
            content: 'Nitro дозволяє створювати API endpoints без зайвих налаштувань.'
        },
        {
            id: 3,
            title: 'SEO в Nuxt',
            slug: 'seo-nuxt',
            desc: 'Мета-теги, sitemap та robots.txt.',
            content: 'Модуль @nuxtjs/seo автоматизує більшість рутинних задач.'
        }
    ]
})