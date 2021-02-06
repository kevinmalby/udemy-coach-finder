import { createRouter, createWebHistory } from 'vue-router';

import TheCoaches from './pages/TheCoaches.vue';
import TheRequests from './pages/TheRequests.vue';
import CoachContact from './pages/CoachContact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        {
            name: 'coaches',
            path: '/coaches',
            component: TheCoaches
        },
        {
            name: "contactCoach",
            path: '/coaches/contact',
            component: CoachContact
        },
        {
            name: 'requests',
            path: '/requests',
            component: TheRequests
        }
    ]
});

export default router;