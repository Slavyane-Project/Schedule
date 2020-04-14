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
              time: "09:50-11:20",
              nameCh: "ЖЦИС",
              teacherCh: "Королёв О.Л.",
              auditoryCh: '306',
              link: "",
              nameZ: 'ППИ',
              teacherZ: 'Королёв О.Л.',
              auditoryZ: '307'
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



