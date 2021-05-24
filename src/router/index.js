
import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')

const Question = () => import('../views/questions/Question')
const Read = () => import('../views/read/Read')
const Test = () => import('../views/testing/Test')
const Login = () => import('../components/common/login/Login')
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// fksdljfkjdsjflsdjlfja
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },

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
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
