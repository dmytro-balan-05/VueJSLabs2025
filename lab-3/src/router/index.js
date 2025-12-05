import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'router-link-active',
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' }
    },
    routes: [
        { path: '/', component: HomeView },
        { path: '/article/:id', component: ArticleView },
        { path: '/about', component: AboutView },
        {
            path: '/:pathMatch(.*)*',
            component: { template: '<h2>404 Not Found</h2>' }
        }
    ]
})

export default router