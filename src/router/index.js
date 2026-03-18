import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import EventsPage from '@/pages/EventsPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/events', component: EventsPage },
  { path: '/about', component: AboutPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
