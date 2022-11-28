import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import LoginUser from '../views/LoginUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:'/home'
    },
    {
      path:'/login',
      name:'Login',
      component:LoginUser
    },
    {
      path:'/register',
      name:'Register',
      component:()=>import('../views/RegisterUser.vue')
    },
    {
      path:'/tour/:id(\\d+)',
      name:'Tour',
      props:true,
      component:()=>import('../views/ToursView.vue'),
      
    },
    {
      path:'/tours',
      name:"tours",
      component:()=>import('../views/Tours.vue')
    },
    {
      path:"/tours",
      name:'Destination',
      component:()=>import('../views/DestinationView.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      name:'404View',
      component:()=>import('../views/NotFound.vue')
    }

  
  ],
  scrollBehavior(to,from, savedPosition){
    return{top:0, behavior:'smooth'}
  }
})

export default router
