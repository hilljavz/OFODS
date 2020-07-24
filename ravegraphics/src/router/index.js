import Vue from 'vue'
import VueRouter from 'vue-router'

import back from "../layouts/back";
import front from "../layouts/front";

import Admin from '../pages/Admin'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Auth from '../layouts/auth'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Forgot from '../pages/Forgot'
import store from '../store'
import Subscription from '../pages/Subscription'
import Messages from '../pages/Messages'
import Category from '../pages/Category'


Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    component:front,
    children:[
      {
        path:'',
        component:Home
      },
      {
        path:'about',
        component:About
      },
      {
        path:'contact',
        component:Contact
      },
      {
        path:'portfolio',
        component:Portfolio
      }
    ]
  },
  {
    path:'/',
    component: Auth,
    children: [
      {
        path:'/login',
        component: Login
      },
      {
        path:'/register',
        component: Register
      },
    ]
  },
  {
    path:'/forgot',
    component: Forgot
  },
  {
    path:'/',
    component:back,
    children:[
      {
        path:'admin',
        component:Admin,
        meta: { requiresAuth: true }
      },
      {
        path:'categories',
        component:Category,
        meta: { requiresAuth: true }
      },
      {
        path:'messages',
        component:Messages,
        meta: { requiresAuth: true }
      },
      {
        path:'subscriptions',
        component:Subscription,
        meta: { requiresAuth: true }
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.token===null) {
      next('/login')
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})



export default router
