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
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Территор-эконом. планирование(Л)',
              teacherCh: 'Ошовская Н.В.',
              auditoryCh: '511',
              link: '-',
              nameZ: 'Территор-эконом. планирование(ПР)',
              teacherZ: 'Ошовская Н.В.',
              auditoryZ: '511',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Мировая экономика и МЭО(ПР)',
              teacherCh: 'Горда О.С.',
              auditoryCh: '303',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Мировая экономика и МЭО(Л)',
              teacherCh: 'Горда О.С.',
              auditoryCh: '512',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
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
              nameCh: 'Психология(Л)',
              teacherCh: 'Реутова В.В.',
              auditoryCh: '512',
              link: '-',
              nameZ: 'Экономика природопользования(Л)',
              teacherZ: 'Дятел В.Н.',
              auditoryZ: '201'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Экономика природопользования(ПР)',
              teacherCh: 'Бабин М.М.',
              auditoryCh: '303',
              link: '-',
              nameZ: 'Психология (ПР)',
              teacherZ: 'Реутова В.В.',
              auditoryZ: '511'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
          ]
        },

        {
          name: "Среда",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Финансы(Л)',
              teacherCh: 'Кремповая Н.Л.',
              auditoryCh: '201',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Финансы(ПР)',
              teacherCh: 'Польская С.И.',
              auditoryCh: '407',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Управление личными финансами(ПР)',
              teacherCh: 'Машьянова Е.Е.',
              auditoryCh: '406',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Физическая культура',
              teacherCh: 'Кафедра физ-ры',
              auditoryCh: 'Спорт зал',
              link: '-',
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
              nameCh: 'Экономика предприятия(ПР)',
              teacherCh: 'Стаценко Е.В.',
              auditoryCh: '511',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Экономика предприятия(Л)',
              teacherCh: 'Стаценко Е.В.',
              auditoryCh: '201',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
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
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
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
              nameCh: 'Бухгалтерский учёт(Л)',
              teacherCh: 'Натарова Е.В.',
              auditoryCh: '512',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Бухгалтерский учёт(ПР)',
              teacherCh: 'Кулякина Е.Л.',
              auditoryCh: '02',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '03',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
          ]
        },
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
