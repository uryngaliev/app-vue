import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/posts',
        name: 'posts',
        component: () => import('../components/PostList.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
