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
              { group: 'БИ-м-о-191', url: '/course_5/bi_191'},
          ]
          },
          { name: 'Торговое дело', icon: 'mdi-cash-register',
            groups: [
              { group: 'ТД-м-о-191', url: '/course_5/td_191'},
            ],
          }, 
          { name: 'Экономика', icon: 'mdi-finance',
            groups: [
              { group: 'Э-м-о-191', url: '/course_5/e_191'},
              { group: 'Э-м-о-192', url: '/course_5/e_192'},
              { group: 'Э-м-о-193', url: '/course_5/e_193'},
              { group: 'Э-м-о-194', url: '/course_5/e_194'},
            ]  
          },
          { name: 'Финансы и кредит', icon: 'mdi-credit-card-outline',
            groups: [
              { group: 'ФиК-м-о-191', url: '/course_5/fik_191'},
              { group: 'ФиК-м-о-192', url: '/course_5/fik_192'},
            ]  
          },
          { name: 'Гос. мун. управление', icon: 'mdi-account-tie', 
            groups: [
              { group: 'ГМУ-м-о-191', url: '/course_5/gu_191'},
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
