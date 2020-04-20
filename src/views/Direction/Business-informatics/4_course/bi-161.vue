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
      groupName: 'БИ-б-о-161',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
              link: '',
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
              link: '',
              nameZ: 'Электронная коммерция (ЛР)',
              teacherZ: 'Усенко Р.С.',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Интернет маркетинг (Л)',
              teacherCh: 'Титаренко Д.В.',
              auditoryCh: '-',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Интернет маркетинг (ЛР)',
              teacherCh: 'Титаренко Д.В.',
              auditoryCh: '-',
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
          name: "Среда",
          lessons: [
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
              nameCh: 'Системы поддержки принятия решений (Л)',
              teacherCh: 'Бойченко О.В.',
              auditoryCh: '303',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Интеллектуальный анализ данных (ЛР)',
              teacherCh: 'Ремесник Е.С.',
              auditoryCh: '306',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Электронная коммерция (ЛР)',
              teacherCh: 'Усенко Р.С.',
              auditoryCh: '307',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
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
              nameCh: 'Управление проектами  информатизации (Л)',
              teacherCh: 'Матвеев В.В.',
              auditoryCh: '303',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Электронная коммерция (Л)',
              teacherCh: 'Круликовский А.П.',
              auditoryCh: '303',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Системы поддержки принятия решений ',
              teacherCh: 'Смирнова О.Ю.',
              auditoryCh: '307',
              link: '',
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
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: 'Интернет маркетинг (ЛР)',
              teacherZ: 'Титаренко Д.В.',
              auditoryZ: '206'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Управление проектами информатизации (ЛР)',
              teacherCh: 'Смирнова О.Ю.',
              auditoryCh: '306',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },
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
