import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    name: 'Edit', 
    component: () => import(`./pages/Edit/Index.vue`) 
  },
  {
    path: '/index', 
    redirect: '/'
  },
]

const router = new VueRouter({
  routes
})

export default router
