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
      groupName: 'Э-б-о-172',
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
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Современные банковские продукты (Л)',
              teacherZ: 'Бондарь А.П.',
              auditoryZ: '03',
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: 'Современные банковские продукты (Пр)',
              teacherZ: 'Бондарь А.П.',
              auditoryZ: '03',
            }
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: "1",
              time: "09:50-11:20",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: "",
              nameZ: 'Основы экономической диагностики (Л)',
              teacherZ: 'Ефремова А.А.',
              auditoryZ: '512',
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Практикум: актуарные расчеты (Пр)",
              teacherCh: "Плакса Ю.В.",
              auditoryCh: '506',
              link: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Основы экономической диагностики (Пр)",
              teacherCh: "Ефремова А.А.",
              auditoryCh: '508',
              link: ""
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
              nameCh: "Финансы малых предприятий (Л)",
              teacherCh: "Норец Н.К.",
              auditoryCh: '03',
              link: "",
              nameZ: "Финансы малых предприятий (Пр)",
              teacherZ: "Норец Н.К.",
              auditoryZ: '03',
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Операции кредитных организаций (Л)",
              teacherCh: "Сиваш О.С.",
              auditoryCh: '512',
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
              nameCh: "Основы экономической диагностики (Пр)",
              teacherCh: "Ефремова А.А.",
              auditoryCh: '506',
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
              nameCh: 'Основы финансового мониторинга (Л)',
              teacherCh: 'Туманова Е.А.',
              auditoryCh: '406',
              link: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Операции с ценными бумагами (Л)',
              teacherCh: 'Бугаёва Т.Н.',
              auditoryCh: '405',
              link: '',
              nameZ: 'Операции с ценными бумагами (Пр)',
              teacherZ: 'Бугаёва Т.Н.',
              auditoryZ: '405',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Основы финансового мониторинга (Пр)',
              teacherCh: 'Курьянова И.В.',
              auditoryCh: '405',
              link: '',
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
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
              nameCh: 'Операции кредитных организаций (Пр)',
              teacherCh: 'Бабин М.М.',
              auditoryCh: '404',
              link: ' ',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Страхование (Пр)',
              teacherCh: 'Щеглова С.С.',
              auditoryCh: '407',
              link: '-',
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
   Schedule,
    Schedule_for_mobile
  }
}
</script>

<style>

</style>
