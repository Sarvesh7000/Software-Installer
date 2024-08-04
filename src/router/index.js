import { createRouter, createWebHistory } from 'vue-router'

function loadView(view) {
  return () => import(`@/views/${view}.vue`)
}
import Login from '../views/LoginPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        authRequired: false,
        showHeader: false
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: loadView('Dashboard'),
      meta: {
        authRequired: true,
        showHeader: true
      }
    },
    {
      path: '/activation-details',
      name: 'ActivationDetails',
      component: loadView('ActivationDetails'),
      meta: {
        authRequired: true,
        showHeader: true
      }
    },
    // {
    //   path: '/uninstallcount',
    //   name: 'UninstallCount',
    //   component: loadView('UninstallCount')
    // },
    {
      path: '/report/:reportType',
      name: 'Report',
      props: true,
      component: loadView('Report'),
      meta: {
        authRequired: true,
        showHeader: true
      }
    }

    // {

    //   name: 'about',
    //   path: '/',
    //   component: about
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
