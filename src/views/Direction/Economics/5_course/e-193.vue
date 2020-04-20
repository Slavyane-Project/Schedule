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
      groupName: 'Э-м-о-193',
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
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Методы принятия управленческих решений(Л)',
              teacherZ: 'Кирильчук С.П.',
              auditoryZ: '512',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Прогнозирование социально-экономических процессов(Л)',
              teacherCh: 'Чернявая А.Л.',
              auditoryCh: '511',
              link: '-',
              nameZ: 'Экономика отраслевых рынков(Л)',
              teacherZ: 'Потеева М.А.',
              auditoryZ: '511'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Экономика отраслевых рынков(Пр)',
              teacherCh: 'Потеева М.А.',
              auditoryCh: '511',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Проектный менеджмент(в профессиональной деят-сти)(Пр)',
              teacherCh: 'Артюхова И.В.',
              auditoryCh: '511',
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
              nameCh: 'Проектный менеджмент(в профессиональной деят-сти)(Пр)',
              teacherCh: 'Артюхова И.В.',
              auditoryCh: '508',
              link: '-',
              nameZ: '-',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Прогнозирование социально-экономических процессов(Пр)',
              teacherCh: 'Чернявая А.Л.',
              auditoryCh: '208/506',
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
              nameCh: 'Системный анализ(Пр)',
              teacherCh: 'Кузьмина Н.В.',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Системный анализ(Л)',
              teacherCh: 'Кузьмина Н.В.',
              auditoryCh: '010',
              link: '-',
              nameZ: 'Методы принятия управленческих решений(Пр)',
              teacherZ: 'Шевченко Е.В.',
              auditoryZ: '010'
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
    Schedule,
    Schedule_for_mobile
  }
}
</script>

<style>

</style>
