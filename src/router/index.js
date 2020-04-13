import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Course_1 from '../views/Courses/1-course.vue'
import Course_2 from '../views/Courses/2-course.vue'
import Course_3 from '../views/Courses/3-course.vue'
import Course_4 from '../views/Courses/4-course.vue'
import Course_5 from '../views/Courses/5-course.vue'

import Bi_191 from '../views/Direction/Business-informatics/1_course/bi-191.vue'
import Bi_181 from '../views/Direction/Business-informatics/2_course/bi-181.vue'
import Bi_171 from '../views/Direction/Business-informatics/3_course/bi-171.vue'
import Bi_161 from '../views/Direction/Business-informatics/4_course/bi-161.vue'
import Bi_162 from '../views/Direction/Business-informatics/4_course/bi-162.vue'
import BiM_191 from '../views/Direction/Business-informatics/5_course/bi-191.vue'

import Td_191 from '../views/Direction/Trading/1_course/td-191.vue'
import Td_181 from '../views/Direction/Trading/2_course/td-181.vue'
import Td_182 from '../views/Direction/Trading/2_course/td-182.vue'
import Td_171 from '../views/Direction/Trading/3_course/td-171.vue'
import Td_161 from '../views/Direction/Trading/4_course/td-161.vue'
import Td_162 from '../views/Direction/Trading/4_course/td-162.vue'
import TdM_191 from '../views/Direction/Trading/5_course/td-191.vue'

import E_191 from '../views/Direction/Economics/1_course/e-191.vue'
import E_192 from '../views/Direction/Economics/1_course/e-192.vue'
import E_193 from '../views/Direction/Economics/1_course/e-193.vue'
import E_194 from '../views/Direction/Economics/1_course/e-194.vue'
import E_181 from '../views/Direction/Economics/2_course/e-181.vue'
import E_182 from '../views/Direction/Economics/2_course/e-182.vue'
import E_183 from '../views/Direction/Economics/2_course/e-183.vue'
import E_184 from '../views/Direction/Economics/2_course/e-184.vue'
import E_171 from '../views/Direction/Economics/3_course/e-171.vue'
import E_172 from '../views/Direction/Economics/3_course/e-172.vue'
import E_173 from '../views/Direction/Economics/3_course/e-173.vue'
import E_174 from '../views/Direction/Economics/3_course/e-174.vue'
import E_175 from '../views/Direction/Economics/3_course/e-175.vue'
import E_176 from '../views/Direction/Economics/3_course/e-176.vue'
import E_161 from '../views/Direction/Economics/4_course/e-161.vue'
import E_162 from '../views/Direction/Economics/4_course/e-162.vue'
import E_163 from '../views/Direction/Economics/4_course/e-163.vue'
import E_164 from '../views/Direction/Economics/4_course/e-164.vue'
import E_165 from '../views/Direction/Economics/4_course/e-165.vue'
import EM_191 from '../views/Direction/Economics/5_course/e-191.vue'
import EM_192 from '../views/Direction/Economics/5_course/e-192.vue'
import EM_193 from '../views/Direction/Economics/5_course/e-193.vue'
import EM_194 from '../views/Direction/Economics/5_course/e-194.vue'

import Gu_191 from '../views/Direction/Municipal-managment/1_course/gu-191.vue'
import Gu_192 from '../views/Direction/Municipal-managment/1_course/gu-192.vue'
import Gu_181 from '../views/Direction/Municipal-managment/2_course/gu-181.vue'
import Gu_182 from '../views/Direction/Municipal-managment/2_course/gu-182.vue'
import Gu_171 from '../views/Direction/Municipal-managment/3_course/gu-171.vue'
import Gu_172 from '../views/Direction/Municipal-managment/3_course/gu-172.vue'
import Gu_161 from '../views/Direction/Municipal-managment/4_course/gu-161.vue'
import Gu_162 from '../views/Direction/Municipal-managment/4_course/gu-162.vue'
import Gu_163 from '../views/Direction/Municipal-managment/4_course/gu-163.vue'
import GuM_191 from '../views/Direction/Municipal-managment/5_course/gu-191.vue'

import Fik_191 from '../views/Direction/Finance-and-credits/5_course/fik-191.vue'
import Fik_192 from '../views/Direction/Finance-and-credits/5_course/fik-192.vue'

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
  {
    path: '/course_2/e_181',
    name: 'E_181',
    component: E_181
  },
  {
    path: '/course_2/e_182',
    name: 'E_182',
    component: E_182
  },
  {
    path: '/course_2/e_183',
    name: 'E_183',
    component: E_183
  },
  {
    path: '/course_2/e_184',
    name: 'E_184',
    component: E_184
  },
  {
    path: '/course_2/gu_181',
    name: 'Gu_181',
    component: Gu_181
  },
  {
    path: '/course_2/gu_182',
    name: 'Gu_182',
    component: Gu_182
  },
  {
    path: '/course_3/bi_171',
    name: 'Bi_171',
    component: Bi_171
  },
  {
    path: '/course_3/td_171',
    name: 'Td_171',
    component: Td_171
  },
  {
    path: '/course_3/e_171',
    name: 'E_171',
    component: E_171
  },
  {
    path: '/course_3/e_172',
    name: 'E_172',
    component: E_172
  },
  {
    path: '/course_3/e_173',
    name: 'E_173',
    component: E_173
  },
  {
    path: '/course_3/e_174',
    name: 'E_174',
    component: E_174
  },
  {
    path: '/course_3/e_175',
    name: 'E_175',
    component: E_175
  },
  {
    path: '/course_3/e_176',
    name: 'E_176',
    component: E_176
  },
  {
    path: '/course_3/gu_171',
    name: 'Gu_171',
    component: Gu_171
  },
  {
    path: '/course_3/gu_172',
    name: 'Gu_172',
    component: Gu_172
  },
  {
    path: '/course_4/bi_161',
    name: 'Bi_161',
    component: Bi_161
  },
  {
    path: '/course_4/bi_162',
    name: 'Bi_162',
    component: Bi_162
  },
  {
    path: '/course_4/e_161',
    name: 'E_161',
    component: E_161
  },
  {
    path: '/course_4/e_162',
    name: 'E_162',
    component: E_162
  },
  {
    path: '/course_4/e_163',
    name: 'E_163',
    component: E_163
  },
  {
    path: '/course_4/e_164',
    name: 'E_164',
    component: E_164
  },
  {
    path: '/course_4/e_165',
    name: 'E_165',
    component: E_165
  },
  {
    path: '/course_4/gu_161',
    name: 'Gu_161',
    component: Gu_161
  },
  {
    path: '/course_4/gu_162',
    name: 'Gu_162',
    component: Gu_162
  },
  {
    path: '/course_4/gu_163',
    name: 'Gu_163',
    component: Gu_163
  },
  {
    path: '/course_4/td_161',
    name: 'Td_161',
    component: Td_161
  }, 
  {
    path: '/course_4/td_162',
    name: 'Td_162',
    component: Td_162
  },   
  {
    path: '/course_5/bi_191',
    name: 'BiM_191',
    component: BiM_191
  }, 
  {
    path: '/course_5/e_191',
    name: 'EM_191',
    component: EM_191
  },  
  {
    path: '/course_5/e_192',
    name: 'EM_192',
    component: EM_192
  },   
  {
    path: '/course_5/e_193',
    name: 'EM_193',
    component: EM_193
  },   
  {
    path: '/course_5/e_194',
    name: 'EM_194',
    component: EM_194
  },   
  {
    path: '/course_5/e_194',
    name: 'EM_194',
    component: EM_194
  }, 
  {
    path: '/course_5/fik_191',
    name: 'Fik_191',
    component: Fik_191
  }, 
  {
    path: '/course_5/fik_192',
    name: 'Fik_192',
    component: Fik_192
  },  
  {
    path: '/course_5/gu_191',
    name: 'GuM_191',
    component: GuM_191
  },
  {
    path: '/course_5/td_191',
    name: 'TdM_191',
    component: TdM_191
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
