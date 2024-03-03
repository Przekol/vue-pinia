import { createRouter, createWebHistory } from 'vue-router'
import BeerView from '@/views/BeerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/beers',
      name: 'beers',
      component: () => import('../views/BeersView.vue')
    },
    {
      path: '/beers/:id',
      name: 'beer',
      component: BeerView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ name: 'beers' })
  }
  next()
})

export default router
