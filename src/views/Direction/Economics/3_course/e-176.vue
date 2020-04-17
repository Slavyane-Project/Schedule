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
      groupName: 'Э-б-о-176',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Упр. производственн. рисками на предприятии (Л)',
              teacherCh: 'Танцюра М.Ю.',
              auditoryCh: '506',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Упр. производственн. рисками на предприятии (Пр)',
              teacherCh: 'Танцюра М.Ю.',
              auditoryCh: '506',
              link: '-',
              nameZ: 'Анализ экологич. рисков деят-ти предприятия (Пр)',
              teacherZ: 'Ошовская Н.В.',
              auditoryZ: '511',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Анализ экологич. рисков деят-ти предприятия (Пр)',
              teacherZ: 'Ошовская Н.В.',
              auditoryZ: '511',
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
            }
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: "1",
              time: "09:50-11:20",
              nameCh: "Экономич. прогноз. деят-ти предприятия (Л)",
              teacherCh: "Черняева А.Л.",
              auditoryCh: '512',
              link: "",
              nameZ: 'Основы экономической диагностики (Л)',
              teacherZ: 'Ефремова А.А.',
              auditoryZ: '512',
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Экономич. прогноз. деят-ти предприятия (Пр)",
              teacherCh: "Черняева А.Л.",
              auditoryCh: '02',
              link: "",
              nameZ: "Формирование бизнес-модели предприятия (Пр)",
              teacherZ: "Кузьмина Н.В.",
              auditoryZ: '02',
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: "",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: '-',
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
              time: "09:50-11:20",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: "",
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Основы экономической диагностики (Пр)",
              teacherCh: "Ефремова А.А.",
              auditoryCh: '511',
              link: "",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: '-',
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Страхование (Л)",
              teacherCh: "Абибуллаев М.С.",
              auditoryCh: '512',
              link: ""
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "Экономич. прогноз. деят-ти предприятия (Пр)",
              teacherCh: "Черняева А.Л.",
              auditoryCh: '511',
              link: ""
            }
          ]
        },

        {
          name: "Четверг",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Осн. научных исслед. в экономике предприятия (Пр)',
              teacherCh: 'Гайсарова А.А.',
              auditoryCh: '511',
              link: '',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Осн. научных исслед. в экономике предприятия (Л)',
              teacherCh: 'Гайсарова А.А.',
              auditoryCh: '511',
              link: '',
              nameZ: 'Формирование бизнес-модели предприятия (Л)',
              teacherZ: 'Кузьмина Н.В.',
              auditoryZ: '511',
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: 'Основы экономической диагностики (Пр)',
              teacherCh: 'Ефремова А.А.',
              auditoryCh: '506',
              link: '',
            },
          ]
        },

        {
          name: "Пятница",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Страхование',
              teacherCh: 'Щеглова С.С.',
              auditoryCh: '405',
              link: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Упр. производственн. рисками на предприятии (Пр)',
              teacherCh: 'Танцюра М.Ю.',
              auditoryCh: '508',
              link: ' ',
              nameZ: 'Осн. орг. деят-ти предпр. на рынке ценных бумаг (Пр)',
              teacherZ: 'Штофер Г.А.',
              auditoryZ: '508',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Осн. орг. деят-ти предпр. на рынке ценных бумаг (Л)',
              teacherCh: 'Штофер Г.А.',
              auditoryCh: '511',
              link: '-',
              nameZ: 'Упр. производственн. рисками на предприятии (Пр)',
              teacherZ: 'Танцюра М.Ю.',
              auditoryZ: '508',
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
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
