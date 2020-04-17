<template>
  <Schedule
    :days="days"
    :groupName="groupName"
  />
</template>


<script>
import Schedule from '@/components/Schedule.vue'

export default {
  data () {
    return {
      groupName: 'Э-б-о-161',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Анализ деятельности страховых организаций (Л)',
              teacherCh: 'Блажевич О.Г.',
              auditoryCh: '1/323',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Финансовое прогнозирование и планирование (Пр)',
              teacherCh: 'Куссый М.Ю.',
              auditoryCh: '1/323',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Анализ деятельности страховых организаций (Пр)',
              teacherCh: 'Блажевич О.Г.',
              auditoryCh: '1/426',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Финансовое прогнозирование и планирование (Л)',
              teacherCh: 'Куссый М.Ю.',
              auditoryCh: '1/323',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Налоговая система  зарубежных стран (Л)',
              teacherCh: 'Сурнина К.С.',
              auditoryCh: '1/329',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '1/434'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Налоговая система  зарубежных стран (Пр)',
              teacherCh: 'Сурнина К.С.',
              auditoryCh: '1/329',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '1/411'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
          ]
        },

        {
          name: "Среда",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Налоговый контроль (Л)',
              teacherCh: 'Туманова Е.А.',
              auditoryCh: '1/432',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Налоговый контроль (Пр)',
              teacherCh: 'Туманова Е.А.',
              auditoryCh: '1/432',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
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
              nameCh: 'Финансовое планирование на предприятии (Пр)',
              teacherCh: 'Шальнева В.В.',
              auditoryCh: '1/323',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Финансовое планирование на предприятии (Л)',
              teacherCh: 'Шальнева В.В.',
              auditoryCh: '1/323',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
          ]
        },

        {
          name: "Пятница",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Налогообложение субъектов предпринимательства (Пр)',
              teacherCh: 'Ворошило В.В.',
              auditoryCh: '1/411',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Налогообложение субъектов предпринимательства (Л)',
              teacherCh: 'Ворошило В.В.',
              auditoryCh: '1/411',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
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
