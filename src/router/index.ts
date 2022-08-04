import { createRouter, createWebHashHistory } from 'vue-router'
import base from './modules/base'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...base
  ],
})

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from, failure) => {
})


export default router
