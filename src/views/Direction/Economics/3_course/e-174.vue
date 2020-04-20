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
      groupName: 'Э-б-о-174',
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
              nameCh: 'Международная торговля (Л)',
              teacherCh: 'Гафарова К.Э.',
              auditoryCh: '110',
              link: '-',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Международная торговля (Пр)',
              teacherCh: 'Гафарова К.Э.',
              auditoryCh: '110',
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
              teacherZ: 'Кузьмина Н.В.',
              auditoryZ: '506',
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Страхование (Пр)",
              teacherCh: "Щеглов С.С.",
              auditoryCh: '408',
              link: "",
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Конъюнктура мировых товарных рынков (Л)",
              teacherCh: "Мираньков Д.Б.",
              auditoryCh: '010',
              link: "",
              nameZ: 'Конъюнктура мировых товарных рынков (Пр)',
              teacherZ: 'Мираньков Д.Б.',
              auditoryZ: '110',
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
              teacherCh: "Кузьмина Н.В.",
              auditoryCh: '508',
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
              nameCh: "Практикум: анализ внешнеэкономич. операций (Пр)",
              teacherCh: "Барсегян А.Г.",
              auditoryCh: '110',
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
              nameCh: 'Основы внешнеэкономической деят-ст (Л)',
              teacherCh: 'Кузнецов М.М.',
              auditoryCh: '110',
              link: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Основы внешнеэкономической деят-ст (Пр)',
              teacherCh: 'Кузнецов М.М.',
              auditoryCh: '110',
              link: '',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Основы экономической диагностики (Пр)',
              teacherCh: 'Кузьмина Н.В.',
              auditoryCh: '506',
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
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
              nameCh: 'Международная экономич. статистика (Л)',
              teacherCh: 'Буценко И.Н.',
              auditoryCh: '110',
              link: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Международная экономич. статистика (Пр)',
              teacherCh: 'Буценко И.Н.',
              auditoryCh: '110',
              link: ' ',
              nameZ: 'Методы и модели принятия упр. решений в ВЭД (Л)',
              teacherZ: 'Друзин Р.В.',
              auditoryZ: '110',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Методы и модели принятия упр. решений в ВЭД (Пр)',
              teacherZ: 'Друзин Р.В.',
              auditoryZ: '110',
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
