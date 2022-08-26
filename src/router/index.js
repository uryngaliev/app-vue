import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/posts',
        name: 'posts',
        component: () => import('../components/PostList.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
