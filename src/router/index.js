 import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Menu',
    //route level code-splitting
    //this generates a separate chunk(container.[hash].js) for this route
    //which is lazy-loaded when the route is visited
    component:()=>import(/* webpackChunkName: "container" */'../views/Menu.vue')
  }, {
    path: '/editar-pelicula',
    name: 'Editar',
    //route level code-splitting
    //this generates a separate chunk(container.[hash].js) for this route
    //which is lazy-loaded when the route is visited
    component:()=>import(/* webpackChunkName: "container" */'../views/EditarPelicula.vue')
  },
  {
    path: '/crear-pelicula',
    name: 'Crear',
    //route level code-splitting
    //this generates a separate chunk(crear.[hash].js) for this route
    //which is lazy-loaded when the route is visited
    component:()=>import(/* webpackChunkName: "crear" */'../views/CrearPelicula.vue')
  },
  
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 