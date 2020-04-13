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
              { group: 'БИ-б-о-161', url: '/course_4/bi_161'},
              { group: 'БИ-б-о-162', url: '/course_4/bi_162'},
          ]
          },

          { name: 'Торговое дело', icon: 'mdi-cash-register',
            groups: [
              { group: 'ТД-б-о-161', url: '/course_4/td_161'},
              { group: 'ТД-б-о-162', url: '/course_4/td_162'},
            ],
          }, 

          { name: 'Экономика', icon: 'mdi-finance',
            groups: [
              { group: 'Э-б-о-163', url: '/course_4/e_163'},
              { group: 'Э-б-о-164', url: '/course_4/e_164'},
              { group: 'Э-б-о-165', url: '/course_4/e_165'},
            ]  
          },
          { name: 'Финансы и кредит', icon: 'mdi-credit-card-outline',
            groups: [
              { group: 'Э-б-о-161', url: '/course_4/e_161'},
              { group: 'Э-б-о-162', url: '/course_4/e_162'},
            ]  
          },

          { name: 'Гос. муниципальное управление', icon: 'mdi-account-tie', 
            groups: [
              { group: 'ГМУ-б-о-161', url: '/course_4/gu_161'},
              { group: 'ГМУ-б-о-162', url: '/course_4/gu_162'},
              { group: 'ГМУ-б-о-163', url: '/course_4/gu_163'},
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
