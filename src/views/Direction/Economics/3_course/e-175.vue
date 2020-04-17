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
      groupName: 'Э-б-о-175',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Организация производства (Л)',
              teacherZ: 'Шамилева Э.Э.',
              auditoryZ: '506',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Эколого-экономическа экспертиза (Л)',
              teacherCh: 'Ошофская Н.В.',
              auditoryCh: '511',
              link: '-',
              nameZ: 'Организация производства (Пр)',
              teacherZ: 'Шамилева Э.Э.',
              auditoryZ: '506',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Эколого-экономическа экспертиза (Пр)',
              teacherCh: 'Ошофская Н.В.',
              auditoryCh: '511',
              link: '-',
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
              nameCh: "Организация производства (Пр)",
              teacherCh: "Шамилева Э.Э.",
              auditoryCh: '511',
              link: "",
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Экономич. прогноз. деят-ти предприятия (Пр)",
              teacherCh: "Черняева А.Л.",
              auditoryCh: '02',
              link: "",
              nameZ: "Формирование бизнес-модели предприятия (Пр)",
              teacherZ: "Кузьмина Н.В.",
              auditoryZ: '02',
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
              nameCh: "Основы экономической диагностики (Пр)",
              teacherCh: "Ефремова А.А.",
              auditoryCh: '511',
              link: "",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: '-',
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Экономич. прогнозирование деят-ти предприятия (Пр)",
              teacherCh: "Черняева А.Л.",
              auditoryCh: '511',
              link: ""
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
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
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
              nameCh: 'Основы экономической диагностики (Пр)',
              teacherCh: 'Ефремова А.А.',
              auditoryCh: '506',
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
              nameCh: 'Осн. научных исслед. в экономике предприятия (Пр)',
              teacherCh: 'Гайсарова А.А.',
              auditoryCh: '511',
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
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Страхование (Пр)',
              teacherCh: 'Щеглова С.С.',
              auditoryCh: '405',
              link: ' ',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Осн. орг. деят-ти предпр. на рынке ценных бумаг (Л)',
              teacherCh: 'Штофер Г.А.',
              auditoryCh: '511',
              link: '-',
              nameZ: 'Осн. орг. деят-ти предпр. на рынке ценных бумаг (Пр)',
              teacherZ: 'Штофер Г.А.',
              auditoryZ: '511',
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
