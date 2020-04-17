<template>
  <Schedule
    :days="days"
  />
</template>


<script>
import Schedule from '@/components/Schedule.vue'

export default {
  data () {
    return {
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
              link: ' '
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Товароведение непродовольств. товаров (Пр)',
              teacherCh: 'Гутникова О.Н.',
              auditoryCh: '206',
              link: ' '
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Маркетинг видов экономич. деятельности (Л)',
              teacherCh: 'Калькова Н.Н.',
              auditoryCh: '011',
              link: '',
            }
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: "Брендинг (Л)",
              teacherCh: "Зиновьев И.Ф.",
              auditoryCh: '011',
              link: "",
              nameZ: "Брендинг (Пр)",
              teacherZ: "Митина Э.А.",
              auditoryZ: '406',
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Интегрированные маркетинговые коммуникации (Л)",
              teacherCh: "Кравченко И.С.",
              auditoryCh: '306',
              link: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: ""
            },
            {
              number: "5",
              time: "16:40-18:10",
              nameCh: "Физическая культура и спорт (Пр)",
              teacherCh: "-",
              auditoryCh: 'Спортзал',
              link: ""
            }
          ]
        },

        {
          name: "Среда",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: ""
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Таможенное дело (Пр)",
              teacherCh: "Вельгош Н.З.",
              auditoryCh: '09',
              link: "",
              nameZ: "Таможенное дело (Л)",
              teacherZ: "Вельгош Н.З",
              auditoryZ: '09',
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Товароведение непродовольственных товаров (Л)",
              teacherCh: "Павлуненко Л.Е.",
              auditoryCh: '405',
              link: "",
              nameZ: "Финанс. менеджмент торговых предприятий (Л)",
              teacherZ: "Калафатов Э.А.",
              auditoryZ: '405',
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "Финанс. менеджмент торговых предприятий (Пр)",
              teacherCh: "Калафатов Э.А.",
              auditoryCh: '405',
              link: "",
              nameZ: "Товароведение непродовольственных товаров (Пр)",
              teacherZ: "Павлуненко Л.Е.",
              auditoryZ: '405',
            }
          ]
        },

        {
          name: "Четверг",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: "PR и корпоративные коммуникации (Л)",
              teacherCh: "Хамидова О.М.",
              auditoryCh: '-',
              link: ""
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Маркетинг видов экономич. деятельности (Пр)",
              teacherCh: "Улановская О.Н.",
              auditoryCh: '011',
              link: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
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
          name: "Пятница",
          lessons: [
            {
              number: "1",
              time: "09:50-11:20",
              nameCh: "Товарная политика организации (Л)",
              teacherCh: "Хамидова О.М.",
              auditoryCh: '403',
              link: ""
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Товарная политика организации (Пр)",
              teacherCh: "Хамидова О.М.",
              auditoryCh: '403',
              link: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Интегрированные маркетинговые коммуникации (Пр)",
              teacherCh: "Улановская О.Н.",
              auditoryCh: '403',
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
