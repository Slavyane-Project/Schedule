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
              { group: 'БИ-б-о-191', url: '/course_1/bi_191'}
          ]
          },

          { name: 'Торговое дело', icon: 'mdi-cash-register',
            groups: [
              { group: 'ТД-б-о-191', url: '/course_1/td_191'},
            ],
          }, 

          { name: 'Экономика', icon: 'mdi-finance',
            groups: [
              { group: 'Э-б-о-191', url: '/course_1/e_191'},
              { group: 'Э-б-о-192', url: '/course_1/e_192'},
              { group: 'Э-б-о-193', url: '/course_1/e_193'},
              { group: 'Э-б-о-194', url: '/course_1/e_194'},
            ]  
          },

          { name: 'Гос. муниципальное управление', icon: 'mdi-account-tie', 
            groups: [
              { group: 'ГМУ-б-о-191', url: '/course_1/gu_191'},
              { group: 'ГМУ-б-о-192', url: '/course_1/gu_192'},
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
<<<<<<< HEAD
=======
h1 {
  text-align: center;
  font-family: Calibri;
  margin-top: 2%
}
.item {
  text-align: center;
}
>>>>>>> 3b2d5d118ea54ea44b647a7c753a76377d01f3d5
</style>
