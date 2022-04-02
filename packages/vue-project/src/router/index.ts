import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/components/HelloWorld.vue'), meta: { name: 'HOME' } },
  { path: '/about', component: () => import('@/components/About.vue'), meta: { name: 'ABOUT' } },
  { path: '/demo1', component: () => import('@/components/demo1.vue'), meta: { name: 'DEMO1' } },
  { path: '/todo', component: () => import('@/views/todo.vue'), meta: { name: 'TODO' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
