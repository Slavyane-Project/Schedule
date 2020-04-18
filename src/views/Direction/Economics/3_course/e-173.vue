<template>
  <div>
    <Schedule class="hidden-md-and-down" :days="days" :groupName="groupName" />
    <Schedule_for_mobile class="hidden-md-and-up" :days="days" :groupName="groupName" />
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Schedule_for_mobile from "@/components/Schedule_for_mobile.vue";




export default {
  data () {
    return {
      groupName: 'Э-б-о-173',
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
              link: '-'
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
              nameCh: 'Теория управленческого учета (Л)',
              teacherCh: 'Рощина Ю.В.',
              auditoryCh: '406',
              link: '-',
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Теория управленческого учета (Пр)',
              teacherCh: 'Рощина Ю.В.',
              auditoryCh: '406',
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
              nameCh: "Международные стандарты финанс. отчетности (Л)",
              teacherCh: "Горбачёв В.А.",
              auditoryCh: '204',
              link: "",
              nameZ: 'Основы экономической диагностики (Л)',
              teacherZ: 'Кузьмина Н.В.',
              auditoryZ: '506',
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Международные стандарты финанс. отчетности (Пр)",
              teacherCh: "Горбачёв В.А.",
              auditoryCh: '010',
              link: "",
              nameZ: 'Налоговый учет (Пр)',
              teacherZ: 'Горбачёв В.А.',
              auditoryZ: '010',
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Страхование (Пр)",
              teacherCh: "Щеглов С.С.",
              auditoryCh: '03',
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
              nameCh: "Основы экономической диагностики (Пр)",
              teacherCh: "Кузьмина Н.В.",
              auditoryCh: '508',
              link: "",
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Бухгалтерский учет в банках (Пр)",
              teacherCh: "Волошина Е.И.",
              auditoryCh: '206',
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
              nameCh: 'Бухгалтерский финансовый учет-2 (Л0',
              teacherCh: 'Ежакова Н.В.',
              auditoryCh: '407',
              link: '',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Бухгалтерский финансовый учет-2 (Пр)',
              teacherCh: 'Ежакова Н.В.',
              auditoryCh: '407',
              link: '',
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: 'Налоговый учет (Л)',
              teacherCh: 'Еримизина М.И.',
              auditoryCh: '407',
              link: '',
              nameZ: 'Основы экономической диагностики (Пр)',
              teacherZ: 'Кузьмина Н.В.',
              auditoryZ: '511',
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
              nameZ: 'Автоматизация бух. учета и анализа (Л)',
              teacherZ: 'Сметанко А.В.',
              auditoryZ: '206',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Операции кредитных организаций (Пр)',
              teacherCh: 'Бабин М.М.',
              auditoryCh: '404',
              link: ' ',
              nameZ: 'Автоматизация бух. учета и анализа (Л)',
              teacherZ: 'Кулякина Е.Л.',
              auditoryZ: '206',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
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
