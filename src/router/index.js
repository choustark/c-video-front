import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../views/home/MainHome.vue';
import UserLogin from '../views/user/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: MainHome
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  // 可以在这里添加更多的路由规则
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
