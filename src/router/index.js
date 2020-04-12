import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course_1 from '../views/1-course.vue'
import Course_2 from '../views/2-course.vue'
import Course_3 from '../views/3-course.vue'
import Course_4 from '../views/4-course.vue'
import Course_5 from '../views/5-course.vue'
import Course_6 from '../views/6-course.vue'
import Bi_181 from '../views/bi-181.vue'
import Td_181 from '../views/td-181.vue'
import Td_182 from '../views/td-182.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/course_1',
    name: 'Course_1',
    component: Course_1
  },
  {
    path: '/course_2',
    name: 'Course_2',
    component: Course_2
  },
  {
    path: '/course_3',
    name: 'Course_3',
    component: Course_3
  },
  {
    path: '/course_4',
    name: 'Course_4',
    component: Course_4
  },
  {
    path: '/course_5',
    name: 'Course_5',
    component: Course_5
  },
  {
    path: '/course_6',
    name: 'Course_6',
    component: Course_6
  },
  {
    path: '/course_1/bi_181',
    name: 'Bi_181',
    component: Bi_181
  },
  {
    path: '/course_1/td_181',
    name: 'Td_181',
    component: Td_181
  },
  {
    path: '/course_1/td_182',
    name: 'Td_182',
    component: Td_182
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
