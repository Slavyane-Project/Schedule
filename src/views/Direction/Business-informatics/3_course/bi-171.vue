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
              time: "08:00-09:30",
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
              time: '09:50-11:20',
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
              time: '11:30-13:00',
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
              time: '13:20-14:50',
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
              time: "08:00-09:30",
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
              time: "09:50-11:20",
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
              time: "11:30-13:00",
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
              time: "08:00-09:30",
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
              time: "09:50-11:20",
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
              time: '11:30-13:00',
              nameCh: 'Прогнозирование соц.-экономич. процессов (Пр)',
              teacherCh: 'Солдатов М.А.',
              auditoryCh: '307',
            },
            {
            number: '4',
              time: '13:20-14:50',
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
              time: "08:00-09:30",
              nameCh: 'Моделирование бизнес-процессов (Пр)',
              teacherCh: 'Круликовский А.П.',
              auditoryCh: '-',
              link: '-',
            },
            {
              number: '2',
              time: '09:50-11:20',
              nameCh: 'Анализ ИТ-инфрастр. предпр. (Пр)',
              teacherCh: 'Усенко Р.С.',
              auditoryCh: '306',
              link: ' ',
            },
            {
              number: '3',
              time: '11:30-13:00',
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
              time: '13:20-14:50',
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
              time: "09:50-11:20",
              name: "ЖЦИС",
              teacher: "Королёв О.Л.",
              auditory: '306',
              link: ""
            },
            {
              number: "2",
              time: "11:30-13:00",
              name: "Культурология",
              teacher: "Кравченко И.С.",
              auditory: '306',
              link: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              name: "БЖД",
              teacher: "Предпопие",
              auditory: '306',
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
