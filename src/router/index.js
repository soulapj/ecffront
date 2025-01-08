import { createRouter, createWebHashHistory } from 'vue-router'
import MovieList from '../views/MovieList.vue'
import MovieAdd from '../views/MovieAdd.vue'
import MovieEdit from '../views/MovieEdit.vue'
import MovieDetail from '../views/MovieDetail.vue'
import CategoryList from '../views/CategoryList.vue'
import CategoryAdd from '../views/CategoryAdd.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import UserRegister from '../views/UserRegister.vue'
import UserLogin from '../views/UserLogin.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movielist',
    component: MovieList
  },
  {
    path: '/movie/add',
    name: 'movieadd',
    component: MovieAdd
  },
  {
    path: '/movie/edit/:id',
    name: 'movieedit',
    component: MovieEdit
  },
  {
    path: '/movie/:id',
    name: 'moviedetail',
    component: MovieDetail
  },
  {
    path: '/category',
    name: 'categorylist',
    component: CategoryList
  },
  {
    path: '/category/add',
    name: 'categoryadd',
    component: CategoryAdd
  },
  {
    path: '/category/edit/:id',
    name: 'categoryEdit',
    component: CategoryEdit
  },
  {
    path: '/register',
    name: 'userregister',
    component: UserRegister
  },
  {
    path: '/login',
    name: 'userlogin',
    component: UserLogin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
