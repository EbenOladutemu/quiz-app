import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/test',
    name: 'TodoApp',
    component: () => import('../components/TodoApp.vue')
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../views/Questions.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition){
    // if (savedPosition){
    //   return savedPosition
    // } else {
      return { x: 0, y: 0 }
    // }
  }
})

export default router
