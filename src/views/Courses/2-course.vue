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
              { group: 'БИ-б-о-181', url: '/course_2/bi_181'}
          ]
          },

          { name: 'Торговое дело', icon: 'mdi-cash-register',
            groups: [
              { group: 'ТД-б-о-181', url: '/course_2/td_181'},
              { group: 'ТД-б-о-182', url: '/course_2/td_182'},
            ],
          },

          { name: 'Экономика', icon: 'mdi-finance',
            groups: [
              { group: 'Э-б-о-181', url: '/course_2/e_181'},
              { group: 'Э-б-о-182', url: '/course_2/e_182'},
              { group: 'Э-б-о-183', url: '/course_2/e_183'},
              { group: 'Э-б-о-184', url: '/course_2/e_184'},
            ]  
          },

          { name: 'Гос. муниципальное управление', icon: 'mdi-account-tie', 
            groups: [
              { group: 'ГМУ-б-о-181', url: '/course_2/gu_181'},
              { group: 'ГМУ-б-о-182', url: '/course_2/gu_182'},
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
