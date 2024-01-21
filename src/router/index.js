// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { GetTitleFromRoute } from '@/utils/TitleUtils'

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
      },
      {
        path:"/optionalvalidation",
        name:"OptionalValidation",
        component: () => import('@/views/OptionalValidation.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to,from) => {
  if(from.name== to.name) return false;

  console.log(to)
  document.title = GetTitleFromRoute(to)
  return true;
})

export default router
