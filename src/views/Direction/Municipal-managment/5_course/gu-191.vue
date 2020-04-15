<template>
  <Schedule
    :days="days"
  />
</template>


<script>
import Schedule from '@/components/Schedule.vue'

export default {
  data () {
    return {
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Информационно-аналитические технологии государственного  и муниципального управления(Пр)',
              teacherZ: 'Донской Д.В.',
              auditoryZ: '306'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Информационно-аналитические технологии государственного  и муниципального управления(Л)',
              teacherCh: 'Донской Д.В.',
              auditoryCh: '306',
              link: '-',
              nameZ: 'Стратег. менеджмент и управление проектами в гос. управлении(Л)',
              teacherZ: 'Дзина М.А.',
              auditoryZ: '207'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Стратег. менеджмент и управление проектами в гос. управлении(Пр)',
              teacherCh: 'Дзина М.А.',
              auditoryCh: '207',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },

        {
          name: "Среда",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Муниципальное управление и местное самоуправление(Л)',
              teacherCh: 'Процай А.Ф.',
              auditoryCh: '406',
              link: '-',
              nameZ: 'Информационно-аналитические технологии государственного  и муниципального управления(Пр)',
              teacherZ: 'Донской Д.В.',
              auditoryZ: '506'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Муниципальное управление и местное самоуправление(Пр)',
              teacherCh: 'Процай А.Ф.',
              auditoryCh: '508',
              link: '-',
              nameZ: 'Стратегическое обеспечение экономической безопасности(Л)',
              teacherZ: 'Ротанов Г.Н.',
              auditoryZ: '508'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Стратегическое обеспечение экономической безопасности(Пр)',
              teacherCh: 'Ротанов Г.Н.',
              auditoryCh: '508',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },

        {
          name: "Четверг",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Муниципальное управление местное самоуправление(Пр)',
              teacherCh: 'Процай А.Ф.',
              auditoryCh: '406',
              link: '-',
              nameZ: 'Правовое обеспечение государственного и муниципального управления(Л)',
              teacherZ: 'Асанова Л.В.',
              auditoryZ: '010'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Стратегическое развитие региона(Л)',
              teacherCh: 'Дзина М.А.',
              auditoryCh: '03',
              link: '-',
              nameZ: 'Правовое обеспечение государственного и муниципального управления(Пр)',
              teacherZ: 'Асанова Л.В.',
              auditoryZ: '03'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Стратегическое развитие региона(Пр)',
              teacherCh: 'Дзина М.А.',
              auditoryCh: '03',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },

        {
          name: "Пятница",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Политические технологии(Л)',
              teacherCh: 'Глушко Ю.В.',
              auditoryCh: '02',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Политические технологии(Пр)',
              teacherCh: 'Глушко Ю.В.',
              auditoryCh: '204',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Управление в социальной сфере(Л)',
              teacherZ: 'Сидоркин А.В.',
              auditoryZ: '02'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Управление в социальной сфере(Пр)',
              teacherZ: 'Сидоркин А.В.',
              auditoryZ: '02'
            },
          ]
        },
      ]
    }
  },
  components: {
    Schedule
  }
}
</script>

<style>

</style>
