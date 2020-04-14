<template>
    <Schedule
      :days="days"
    />
</template>

<script>
import Schedule from '@/components/Schedule.vue'

export default {
  data() {
    return {
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: "1",
              time: "08:00-09:30",
              nameCh: ' ',
              teacherCh: ' ',
              auditoryCh: '',
              link: ' ',
              nameZ: 'Проектирование пользовательского интерфейса',
              teacherZ: 'Королёв О.Л.',
              auditoryZ: '306',
            },
            {
              number: '2',
              time: '09:50-11:20',
              nameCh: 'Безопасность жизнедеятельности',
              teacherCh: 'Махаричева А.А.',
              auditoryCh: '03',
              link: ' ',
              nameZ: 'Проектирование пользовательского интерфейса',
              teacherZ: 'Королёв О.Л.',
              auditoryZ: '306'
            },
            {
              number: '3',
              time: '11:30-13:00',
              nameCh: 'Культурология',
              teacherCh: 'Кравченко И.В.',
              auditoryCh: '03',
              link: ' ',
              nameZ: 'Безопасность жизнедеятельности',
              teacherZ: 'Скоромная Н.И.',
              auditoryZ: '207'
            },
            {
              number: '4',
              time: '13:20-14:50',
              nameCh: 'Культурология',
              teacherCh: 'Кравченко И.В',
              auditoryCh: '03',
              link: ' ',
              nameZ: ' ',
              teacherZ: ' ',
              auditoryZ: ' '
            },
            {
              number: '5',
              time: "15:00-16:30",
              nameCh: ' ',
              teacherCh: ' ',
              auditoryCh: ' ',
              link: ' ',
              nameZ: ' ',
              teacherZ: ' ',
              auditoryZ: ' '
            },
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: "1",
              time: "09:50-11:20",
              name: "ЖЦИС",
              teacher: "Бойченко",
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
        },

        {
          name: "Среда",
          lessons: [
            {
              number: "2",
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
        },

        {
          name: "Четверг",
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
<style scoped>

</style>



