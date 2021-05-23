import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/absen/Home.vue'
import Createabsen from '../views/absen/Createabsen.vue'
import Editabsen from '../views/absen/Editabsen.vue'
import mahasiswa from '../views/mahasiswa/Index.vue'
import Createmahasiswa from '../views/mahasiswa/Createmahasiswa.vue'
import Editmahasiswa from '../views/mahasiswa/Editmahasiswa.vue'
import daftar_matakuliah from '../views/daftar_matakuliah/pertama.vue'
import Creatematakuliah from '../views/daftar_matakuliah/Creatematakuliah.vue'
import Editmatakuliah from '../views/daftar_matakuliah/Editmatakuliah.vue'
import daftar_semester from '../views/daftar_semester/awal.vue'
import Createdaftarsemester from '../views/daftar_semester/Createdaftarsemester.vue'
import Editdaftarsemester from '../views/daftar_semester/Editdaftarsemester.vue'
import jadwal_mahasiswa from '../views/jadwal_mahasiswa/Homes.vue'
import Createjadwalmatakuliah from '../views/jadwal_mahasiswa/Createjadwalmatakuliah.vue'
import Editjadwalmatakuliah from '../views/jadwal_mahasiswa/Editjadwalmatakuliah.vue'
import kontrak_matakuliah from '../views/kontrak_matakuliah/awalan.vue'
import Createkontrakmatakuliah from '../views/kontrak_matakuliah/Createkontrakmatakuliah.vue'
import Editkontrakmahasiswa from '../views/kontrak_matakuliah/Editkontrakmahasiswa.vue'
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
    component: mahasiswa
  },
  {
    path: '/createmahasiswa',
    name: 'Createmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswa
  },
  {
    path: '/editmahasiswa/:id',
    name: 'Editmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswa
  },
  {
    path: '/daftar_matakuliah',
    name: 'daftar_matakuliah.pertama',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: daftarmatakuliah
  },
  {
    path: '/creatematakuliah',
    name: 'Creatematakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliah
  },
  {
    path: '/editmatakuliah/:id',
    name: 'Editmatakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliah
  },
  {
    path: '/daftar_semester',
    name: 'daftar_semester.awal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: daftar_semester
  },
  {
    path: '/createdaftarsemester',
    name: 'Createdaftarsemester',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createdaftarsemester
  },
  {
    path: '/editdaftarsemester/:id',
    name: 'Editdaftarsemester',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editdaftarsemester
  },
  {
    path: '/jadwal_matakuliah',
    name: 'jadwal_matakuliah.homes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: jadwal_matakuliah
  },
  {
    path: '/createjadwalmatakuliah',
    name: 'Createjadwalmatakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createjadwalmatakuliah
  },
  {
    path: '/editjadwalmatakuliah/:id',
    name: 'Editjadwalmatakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editjadwalmatakuliah
  },
  {
    path: '/kontrak_matakuliah',
    name: 'kontrak_matakuliah.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: kontrak_matakuliah
  },
  {
    path: '/createkontrakmatakuliah',
    name: 'Createkontrakmatakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkontrakmatakuliah
  },
  {
    path: '/editkontrakmahasiswa/:id',
    name: 'Editkontrakmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontrakmahasiswa
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
