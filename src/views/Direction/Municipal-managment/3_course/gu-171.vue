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
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Гос. и муницип. финансы (Л)',
              teacherCh: 'Климчук С.В.',
              auditoryCh: '011',
              link: '-',
              nameZ: 'Управление кластерами региона (Пр)',
              teacherZ: 'Подсолонко В.А.',
              auditoryZ: '011',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Гос. и муницип. финансы (Л)',
              teacherCh: 'Климчук С.В.',
              auditoryCh: '011',
              link: '',
              nameZ: 'Управление кластерами региона (Л)',
              teacherZ: 'Подсолонко В.А.',
              auditoryZ: '011'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: ' ',
              nameZ: 'Гос. и муницип. финансы (Пр)',
              teacherZ: 'Климчук С.В.',
              auditoryZ: '-'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: 'Эффект. руководит. в системе гос. управления (Л)',
              teacherZ: '-',
              auditoryZ: '506'
            }
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Эффект. руководит. в системе гос. управления (Пр)',
              teacherCh: 'Смерницкая Е.В.',
              auditoryCh: '02',
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Кадр. обеспечение гос. и муницип. управления (Л)',
              teacherCh: 'Глушко Ю.В.',
              auditoryCh: '405',
              link: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Кадр. обеспечение гос. и муницип. управления (Пр)',
              teacherCh: 'Глушко Ю.В.',
              auditoryCh: '405',
              link: ''
            },
            {
              number: "5",
              time: "16:40-18:10",
              nameCh: "Физическая культура и спорт (Пр)",
              teacherCh: "-",
              auditoryCh: 'Спортзал',
              link: ""
            },
          ]
        },

        {
          name: "Среда",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Инновацион. технологии в гос. управлении (Л)',
              teacherCh: 'Онищенко С.К.',
              auditoryCh: '206',
              link: '',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Инновацион. технологии в гос. управлении (Пр)',
              teacherCh: 'Онищенко С.К.',
              auditoryCh: '206',
              link: '',
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Государственная инвестиционная политика (Пр)',
              teacherCh: 'Климчук С.В.',
              auditoryCh: '-',
              link: '',
              nameZ: 'Государственная инвестиционная политика (Пр)',
              teacherZ: 'Климчук С.В.',
              auditoryZ: '-'
            }
          ]
        },

        {
          name: "Четверг",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Государственная ивестиционная политика (Л)',
              teacherCh: 'Климчук С.В.',
              auditoryCh: '-',
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Государственная ивестиционная политика (Пр)',
              teacherCh: 'Климчук С.В.',
              auditoryCh: '508',
              link: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Государственная ивестиционная политика (Л)',
              teacherCh: 'Климчук С.В.',
              auditoryCh: '512',
              link: ''
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: ""
            },
          ]
        },

        {
          name: "Пятница",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Регион. управление и территор. планирование (Л)',
              teacherCh: 'ДобровольскаяО.П.',
              auditoryCh: '011',
              link: ' ',
              nameZ: 'Гос. и муницип. финансы (Л)',
              teacherZ: 'Климчук С.В.',
              auditoryZ: '011'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Регион. управление и территор. планирование (Пр)',
              teacherCh: 'ДобровольскаяО.П.',
              auditoryCh: '011',
              link: ' ',
              nameZ: 'Гос. и муницип. финансы (Пр)',
              teacherZ: 'Климчук С.В.',
              auditoryZ: '011'
            }
          ]
        }
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
