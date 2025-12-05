import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'router-link-active',
    scrollBehavior() { return { top: 0 } },
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login, meta: { public: true } },
        { path: '/register', component: Register, meta: { public: true } },
        {
            path: '/admin',
            component: () => import('../views/AdminLayout.vue'),
            meta: { requiresAuth: true }, // [cite: 29]
            children: [
                { path: 'dashboard', component: () => import('../views/Dashboard.vue') },
                { path: 'users', component: () => import('../views/Users.vue') },
                { path: 'user/:id', component: () => import('../views/UserDetail.vue') },
                { path: 'reports', component: () => import('../views/Reports.vue') }
            ]
        },
        { path: '/:pathMatch(.*)*', component: { template: '<h2>404 Not Found</h2>' } }
    ]
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router