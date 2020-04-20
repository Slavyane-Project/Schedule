<template>
  <div>
    <Schedule class="hidden-sm-and-down" :days="days" :groupName="groupName"/>
    <Schedule_for_mobile class="hidden-md-and-up" :days="days" :groupName="groupName"/>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Schedule_for_mobile from "@/components/Schedule_for_mobile.vue";

export default {
  data () {
    return {
      groupName: 'Э-б-о-165',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-' ,
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Оценивание результативности деятельности предприятия (Л)',
              teacherCh: 'Наливайченко Е.В.',
              auditoryCh: '-',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Оценивание результативности деятельности предприятия (Пр)',
              teacherCh: 'Наливайченко Е.В.',
              auditoryCh: '-',
              link: '-',
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
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Организация операционной деятельности предприятия (Пр)',
              teacherCh: 'Шамилев Э.Э.',
              auditoryCh: '-',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Организация операционной деятельности предприятия (Пр)',
              teacherCh: 'Э.Э.',
              auditoryCh: '-',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },

        {
          name: "Среда",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Потенциал и развитие предприятия (Л)',
              teacherCh: 'Шевченко Е.В.',
              auditoryCh: '511',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Планирование деятельности предприятия на фонд. рынке (Л)',
              teacherCh: 'Штофер Г.А.',
              auditoryCh: '512',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Планирование деятельности предприятия на фонд. рынке (Пр)',
              teacherCh: 'Штофер Г.А.',
              auditoryCh: '512',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },

        {
          name: "Четверг",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Потенциал и развитие предприятия (Пр)',
              teacherCh: 'Шевченко Е.В.',
              auditoryCh: '010',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '518'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Проектный анализ (Л)',
              teacherCh: 'Ергин Е.В.',
              auditoryCh: '508',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Проектный анализ (Пр)',
              teacherCh: 'Ергин Е.В.',
              auditoryCh: '508',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },

        {
          name: "Пятница",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Обоснование хоз. решений и оценка рисков (Л)',
              teacherCh: 'Танцюра М.Ю.',
              auditoryCh: '508',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Обоснование хоз. решений и оценка рисков (Пр)',
              teacherCh: '508',
              auditoryCh: 'Танцюра М.Ю.',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
          ]
        },
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
