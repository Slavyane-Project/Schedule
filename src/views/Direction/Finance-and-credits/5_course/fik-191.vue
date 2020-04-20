<template>
  <div>
    <Schedule class="hidden-sm-and-down" :days="days" :groupName="groupName"/>
    <Schedule_for_mobile class="hidden-md-and-up" :days="days" :groupName="groupName"/>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Schedule_for_mobile from "@/components/Schedule_for_mobile.vue";

export default {
  data () {
    return {
      groupName: 'ФиК-м-о-191',
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
              nameCh: 'Проектый менеджмент(ПР)',
              teacherCh: 'Нехайчук Д.В.',
              auditoryCh: '1/430',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Комплексная оценка(ПР)',
              teacherCh: 'Жарова А.Р.',
              auditoryCh: '1/430',
              link: '-',
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
              nameCh: 'Оценка рисков(ПР)',
              teacherCh: 'Жарова А.Р.',
              auditoryCh: '1/430',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Проектный менеджмент(ПР)',
              teacherCh: 'Нехайчук Д.В.',
              auditoryCh: '1/430',
              link: '-',
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
              nameZ: 'Оценка рисков(Л)',
              teacherZ: 'Жарова А.Р.',
              auditoryZ: '1/430'
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
              nameCh: '',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Самостоятельная работа',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Самостоятельная работа',
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
              nameCh: 'Фин. менеджмент кредит. орган.(ПР)',
              teacherCh: 'Мурашова Е.А.',
              auditoryCh: '1/430',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Бюджетный менеджмент(Л)',
              teacherCh: 'Доброскок О.В.',
              auditoryCh: '1/411',
              link: '-',
              nameZ: 'Фин. менеджмент кредит. организ.(Л)',
              teacherZ: 'Бондарь А.П.',
              auditoryZ: '1/411'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Бюджетный менеджмент(ПР)',
              teacherCh: 'Доброскок О.В.',
              auditoryCh: '1/430',
              link: '-',
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
          name: "Пятница",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
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
              nameCh: 'Самостоятельная работа',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
          ]
        }
      ]
    }
  },
  components: {
    Schedule,
    Schedule_for_mobile
  }
}
</script>

<style>

</style>
