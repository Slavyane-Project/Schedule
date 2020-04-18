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
      groupName: 'БИ-б-о-171',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: 'Управление ИТ-проектами (Пр)',
              teacherCh: 'Солдатова С.А.',
              auditoryCh: '307',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Управление ИТ-проектами (Л)',
              teacherCh: 'Матвеев В.В.',
              auditoryCh: '307',
              link: ' ',
              nameZ: 'Нейронные сети (Л)',
              teacherZ: 'Солдатов М.А.',
              auditoryZ: '307'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Анализ ИТ-инфрастр. предпр. (Л)',
              teacherCh: 'Королёв О.Л.',
              auditoryCh: '307',
              link: ' ',
              nameZ: 'Нейронные сети (Пр)',
              teacherZ: 'Солдатов М.А.',
              auditoryZ: '307'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
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
              number: "1",
              time: "9:50-11:20",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: "",
              nameZ: 'Проектирование архитектуры эл. предприятия (Л)',
              teacherZ: 'Матвеев В.В.',
              auditoryZ: '208'
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: '-',
              link: "",
              nameZ: 'Проектирование архитектуры эл. предприятия (Пр)',
              teacherZ: 'Матвеев В.В.',
              auditoryZ: '208'
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
              link: "",
              nameZ: 'Интернет-маркетинг (Л)',
              teacherZ: 'Титаренко Д.В.',
              auditoryZ: '307'
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Прогнозирование соц.-экономич. процессов (Л)",
              teacherCh: "Солдатов М.А.",
              auditoryCh: '307',
              link: "",
              nameZ: 'Интернет-маркетинг (Пр)',
              teacherZ: 'Титаренко Д.В.',
              auditoryZ: '307'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Прогнозирование соц.-экономич. процессов (Пр)',
              teacherCh: 'Солдатов М.А.',
              auditoryCh: '307',
            },
            {
            number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            }
          ]
        },

        {
          name: "Четверг",
          lessons: [
            {
             number: "1",
              time: "9:50-11:20",
              nameCh: 'Моделирование бизнес-процессов (Пр)',
              teacherCh: 'Круликовский А.П.',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Анализ ИТ-инфрастр. предпр. (Пр)',
              teacherCh: 'Усенко Р.С.',
              auditoryCh: '306',
              link: ' ',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: ' ',
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
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            }
          ]
        },

        {
          name: "Пятница",
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
              nameCh: "Имитационное моделирование (Пр)",
              teacherCh: "Солдатов М.А.",
              auditoryCh: '204',
              link: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Имитационное моделирование (Л)",
              teacherCh: "Солдатов М.А.",
              auditoryCh: '204',
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
    Schedule,
    Schedule_for_mobile
  }
}
</script>

<style>

</style>
