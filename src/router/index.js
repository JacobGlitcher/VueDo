import {createRouter, createWebHistory} from 'vue-router';
import RecentTasks from '../pages/RecentTasks.vue';
import Home from '../pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/recent',
      name: 'RecentTasks',
      component: RecentTasks,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});

export default router;