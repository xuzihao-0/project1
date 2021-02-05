import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')

const Question = () => import('../views/questions/Question')
const Read = () => import('../views/read/Read')
const Test = () => import('../views/testing/Test')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path:'/qs',
    name:'Qs',
    component:Question
  },
  {
    path:'/read',
    name:'Read',
    component:Read
  },
  {
    path:'/test',
    name:'Test',
    component:Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
