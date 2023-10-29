// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'vueform',
        name: 'vueform',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/VueFormExample.vue'),
      },
      {
        path:"",
        name:"Home",
        component: () => import(/* webpackChunkName: "home" */ '@/views/AiPhotoGallery.vue'),

      },
      {
        path:"/vueuseexample",
        name:"VueUseExample",
        component: () => import('@/views/VueUseExamples.vue'),
      },
      {
        path:"/photocarousel",
        name:"PhotoCarousel",
        component: () => import('@/views/PhotoCarousel.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
