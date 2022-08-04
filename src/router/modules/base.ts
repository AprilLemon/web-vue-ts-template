import { RouteRecordRaw } from "vue-router";

const base: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import ('@/pages/login/Login.vue'),
  },
  {
    path: '/404',
    component: () => import ('@/pages/error/404.vue')
  }
]
export default base
