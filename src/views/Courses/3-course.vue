<template> 
    <Courses  
      :faculties="faculties"
    />
</template>

<script>
import Courses from '@/components/Courses.vue'

export default {
  data () {
    return{
        faculties: [
          { name: 'Бизнес-информатика', icon:'mdi-laptop',
            groups: [
              { group: 'БИ-б-о-171', url: '/course_3/bi_171'}
          ]
          },

          { name: 'Торговое дело', icon: 'mdi-cash-register',
            groups: [
              { group: 'ТД-б-о-171', url: '/course_3/td_171'},
            ],
          },

          { name: 'Экономика', icon: 'mdi-finance',
            groups: [
              { group: 'Э-б-о-171', url: '/course_3/e_171'},
              { group: 'Э-б-о-172', url: '/course_3/e_172'},
              { group: 'Э-б-о-173', url: '/course_3/e_173'},
              { group: 'Э-б-о-174', url: '/course_3/e_174'},
              { group: 'Э-б-о-175', url: '/course_3/e_175'},
              { group: 'Э-б-о-176', url: '/course_3/e_176'},
            ]  
          },

          { name: 'Гос. мун. управление', icon: 'mdi-account-tie', 
            groups: [
              { group: 'ГМУ-б-о-171', url: '/course_3/gu_171'},
              { group: 'ГМУ-б-о-172', url: '/course_3/gu_172'},
            ]
          },
        ],
    }
  },
  components: {
    Courses
  }
}
</script>

<style scoped>
</style>
