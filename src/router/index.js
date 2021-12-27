import * as VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Unauthorized from '../components/Unauthorized.vue'
import AuthCallback from '../components/AuthCallback.vue'
import SilentRenew from '../components/SilentRenew.vue'
import auth from '../auth/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/callback',
    name: 'AuthCallback',
    component: AuthCallback
  },
  {
    path: '/silent-renew.html',
    name: 'SilentRenew',
    component: SilentRenew
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { requiresAuth: true },
    component: Profile
  },
  ,
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorized
  },
  {
    path: '/:pathMatch(.*)*', // redirect to home if unhandled route entered
    redirect: '/'
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/'),
  routes
})
router.beforeEach(async (to, from, next) => {
  const loggedIn = await auth.isLoggedIn(true)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      return next({
        path: '/unauthorized'
      })
    }
  }
  return next()
})

export default router
