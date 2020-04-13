import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Course_1 from '../views/Courses/1-course.vue'
import Course_2 from '../views/Courses/2-course.vue'
import Course_3 from '../views/Courses/3-course.vue'
import Course_4 from '../views/Courses/4-course.vue'
import Course_5 from '../views/Courses/5-course.vue'
import Course_6 from '../views/Courses/6-course.vue'

import Bi_191 from '../views/Direction/Business-informatics/1_course/bi-191.vue'
import Bi_181 from '../views/Direction/Business-informatics/2_course/bi-181.vue'

import Td_191 from '../views/Direction/Trading/1_course/td-191.vue'
import Td_181 from '../views/Direction/Trading/2_course/td-181.vue'
import Td_182 from '../views/Direction/Trading/2_course/td-182.vue'

import E_191 from '../views/Direction/Economics/1_course/e-191.vue'
import E_192 from '../views/Direction/Economics/1_course/e-192.vue'
import E_193 from '../views/Direction/Economics/1_course/e-193.vue'
import E_194 from '../views/Direction/Economics/1_course/e-194.vue'

import Gu_191 from '../views/Direction/Municipal-managment/1_course/gu-191.vue'
import Gu_192 from '../views/Direction/Municipal-managment/1_course/gu-192.vue'

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
    path: '/course_1/bi_191',
    name: 'Bi_191',
    component: Bi_191
  },
  {
    path: '/course_1/td_191',
    name: 'Td_191',
    component: Td_191
  },
  {
    path: '/course_1/e_191',
    name: 'E_191',
    component: E_191
  },
  {
    path: '/course_1/e_192',
    name: 'E_192',
    component: E_192
  },
  {
    path: '/course_1/e_193',
    name: 'E_193',
    component: E_193
  },
  {
    path: '/course_1/e_194',
    name: 'E_194',
    component: E_194
  },
  {
    path: '/course_1/td_191',
    name: 'Td_191',
    component: Td_191
  },
  {
    path: '/course_1/gu_191',
    name: 'Gu_191',
    component: Gu_191
  },
  {
    path: '/course_1/gu_192',
    name: 'Gu_192',
    component: Gu_192
  },
  {
    path: '/course_1/bi_191',
    name: 'Bi_191',
    component: Bi_191
  },
  {
    path: '/course_2/bi_181',
    name: 'Bi_181',
    component: Bi_181
  },
  {
    path: '/course_2/td_181',
    name: 'Td_181',
    component: Td_181
  },
  {
    path: '/course_2/td_182',
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
