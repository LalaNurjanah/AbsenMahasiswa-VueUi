import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/absen/Home.vue'
import Createabsen from '../views/absen/Createabsen.vue'
import Editabsen from '../views/absen/Editabsen.vue'
import Mahasiswa from '../views/mahasiswa/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createabsen',
    name: 'Createabsen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createabsen
  },
  {
    path: '/editabsen/:id',
    name: 'Editabsen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editabsen
  },
  {
    path: '/mahasiswa',
    name: 'mahasiswa.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mahasiswa
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
