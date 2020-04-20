<template>
  <div>
    <Schedule class="visible-md-and-up" :days="days" :groupName="groupName" />
    <Schedule_for_mobile class="visible-sm-and-down" :days="days" :groupName="groupName" />
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Schedule_for_mobile from "@/components/Schedule_for_mobile.vue";

export default {
  data () {
    return {
      groupName: 'ТД-б-о-181',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Бухгалтерский учёт(Л)',
              teacherCh: 'Горбачёв В.А.',
              auditoryCh: '204',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Экономика предприятия(ПР)',
              teacherCh: 'Каминская А.О.',
              auditoryCh: '508',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Бухгалтерский учёт(ПР)',
              teacherCh: 'Горбачёв В.А.',
              auditoryCh: '204',
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
          name: "Вторник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Корпоративная культура(Л)',
              teacherCh: 'Царенко Н.В.',
              auditoryCh: '406',
              link: '-',
              nameZ: 'Маркетинг. исслед. в торговле(Л)',
              teacherZ: 'Зиновьев И.Ф.',
              auditoryZ: '011',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Эконометрика(Л)',
              teacherCh: 'Иванов С.В.',
              auditoryCh: '406',
              link: '-',
              nameZ: 'Психология(Л)',
              teacherZ: 'Реутова В.В.',
              auditoryZ: '512'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Маркетинговые исследования(ПР)',
              teacherZ: 'Митина Э.А.',
              auditoryZ: '407'
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
              nameCh: 'Корпоративная культура(ПР)',
              teacherCh: 'Черногорова К.А.',
              auditoryCh: '02',
              link: '-',
              nameZ: 'Психология(ПР)',
              teacherZ: 'Реутова В.В.',
              auditoryZ: '403',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Технология торговли(ПР)',
              teacherCh: 'Митина Э.А.',
              auditoryCh: '03',
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
              auditoryCh: '206',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '4',
              time: '16:40-18:10',
              nameCh: 'Физическая культура',
              teacherCh: 'Кафедра физ-ры',
              auditoryCh: 'Спорт зал',
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
              nameZ: 'Стандарт., метролог., подтв. соотв.(ПР)',
              teacherZ: 'Павлуненко Л.Е.',
              auditoryZ: '403',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Стандарт., метролог., подтв. соотв.(Л)',
              teacherCh: 'Павлуненко Л.Е.',
              auditoryCh: '403',
              link: '-',
              nameZ: 'Эконометрика(ПР)',
              teacherZ: 'Ремесник Е.С.',
              auditoryZ: '206'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Технология торговли(Л)',
              teacherCh: 'Хамидова О.М.',
              auditoryCh: '403',
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
              nameCh: 'Экономика предприятия(Л)',
              teacherCh: 'Дементьев М.Ю.',
              auditoryCh: '201/512',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Эконометрика(ПР)',
              teacherCh: 'Ремесник Е.С.',
              auditoryCh: '306',
              link: '-',
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
