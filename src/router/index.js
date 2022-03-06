import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '@/views/category/AddCategory'
import ListCategory from "@/views/category/ListCategory";
import AddProduct from "@/views/product/AddProduct";
import ListProduct from "@/views/product/ListProduct";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin/category/add',
    name: 'Add Category',
    component: AddCategory,
    props: true
  },
  {
    path: '/admin/category',
    name: 'Category List',
    component: ListCategory
  },
  {
    path: '/admin/product/add',
    name: 'Add Product',
    component: AddProduct,
    props: true
  },
  {
    path: '/admin/product',
    name: 'Product List',
    component: ListProduct
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
