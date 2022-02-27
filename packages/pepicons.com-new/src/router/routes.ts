import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('../pages/LandingPage.vue') },
      { path: 'dev', component: () => import('../pages/Dev.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '*',
  //   component: () => import('../pages/Error404.vue'),
  // },
  {
    path: '/:catchAll(.*)',
    component: () => import('../pages/Error404.vue'),
  },
]

export default routes
