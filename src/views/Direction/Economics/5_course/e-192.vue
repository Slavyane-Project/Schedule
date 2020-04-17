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
      groupName: 'Э-м-о-192',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
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
              auditoryZ: '',
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
              auditoryZ: '',
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Формирование фин. отчетности по международным стандартам(Л)',
              teacherCh: 'Богданова Ж.А.',
              auditoryCh: '402',
              link: '-',
              nameZ: 'Методы принятия управленческих решений(Л)',
              teacherZ: 'Кирильчук Ж.А.',
              auditoryZ: '512',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Проектный менеджмент(в профессионой деят-сти)(Пр)',
              teacherCh: 'Богданова Ж.А.',
              auditoryCh: '010',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Внешний аудит(Пр)',
              teacherCh: 'Апалько А.А.',
              auditoryCh: '010',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '5',
              time: '16:40-18:10',
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
              nameCh: 'Методы принятия управленческих решений(Пр)',
              teacherCh: 'Шевченко Е.В.',
              auditoryCh: '010',
              link: '-',
              nameZ: '1С:Кадровый учет и расчеты с персоналом(Л)',
              teacherZ: 'Чепоров В.В.',
              auditoryZ: '306'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '1С:Кадровый учет и расчеты с персоналом(Пр)',
              teacherCh: 'Чепоров В.В.',
              auditoryCh: '010',
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
              nameCh: 'Внутренний аудит(Л)',
              teacherCh: 'Сметанко А.В.',
              auditoryCh: '408',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Формирование фин. отчетности по международным стандартам(Пр)',
              teacherCh: 'Богданова Ж.А.',
              auditoryCh: '207',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Проектный менеджмент(в профессиональной деят-сти)(Пр)',
              teacherCh: 'Богданова Ж.А.',
              auditoryCh: '207',
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
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
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
              auditoryZ: '',
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
