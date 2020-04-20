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
      groupName: 'Э-б-о-171',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Самостоятельная работа',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Самостоятельная работа',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Самостоятельная работа',
              teacherCh: '-',
              auditoryCh: '-',
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
              nameCh: "Основы экономической диагностики (Пр)",
              teacherCh: "Ефремова А.А.",
              auditoryCh: '508',
              link: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Международн. расчеты и валютные операции (Л/Пр)",
              teacherCh: "Сиваш О.С.",
              auditoryCh: '204',
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
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: ""
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Операция кредитных органиаций (Л)",
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
              nameCh: 'Основы финансового мониторинга (Л)',
              teacherCh: 'Туманова Е.А.',
              auditoryCh: '406',
              link: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Основы финансового мониторинга (Пр)',
              teacherCh: 'Курьянова И.В.',
              auditoryCh: '406',
              link: '',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Основы экономической диагностики (Пр)',
              teacherCh: 'Ефремова А.А.',
              auditoryCh: '508',
              link: '',
              nameZ: 'Корпоративные финансы (Л)',
              teacherZ: 'Куссый М.Ю.',
              auditoryZ: '406',
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: 'Корпоративные финансы (Пр)',
              teacherZ: 'Куссый М.Ю.',
              auditoryZ: '406',
            },
          ]
        },

        {
          name: "Пятница",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Фондовые биржи (Пр)',
              teacherCh: 'Бабин М.М.',
              auditoryCh: '404',
              link: '-',
              nameZ: 'Фондовые биржи (Л)',
              teacherZ: 'Зубкова В.И.',
              auditoryZ: '404',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Практикум по операциям кредитных орг. (Пр)',
              teacherCh: 'Ягупова Е.А.',
              auditoryCh: '407/02',
              link: ' ',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Операции кредитных организаций (Пр)',
              teacherCh: 'Ягупова Е.А.',
              auditoryCh: '404',
              link: ' ',
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Страхование (Пр)',
              teacherCh: 'Щеглова С.С.',
              auditoryCh: '407',
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
