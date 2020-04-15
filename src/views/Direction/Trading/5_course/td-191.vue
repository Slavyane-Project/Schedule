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
              nameCh: 'Маркетинг-аналитика(Л)',
              teacherCh: 'Калькова Н.Н.',
              auditoryCh: '208',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Проектный менеджмент(в профессиональной деятельности)(Пр)',
              teacherCh: 'Ерёменко Ю.А.',
              auditoryCh: '208/010',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Маркетинг-аналитика(ЛР)',
              teacherCh: 'Калькова Н.Н.',
              auditoryCh: '208',
              link: '-',
              nameZ: 'Маркетинг-аналитика(Пр)',
              teacherZ: 'Калькова Н.Н.',
              auditoryZ: '208'
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
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
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
              nameCh: 'Анализ торговой деятельности(Пр)',
              teacherCh: 'Бобарыкина Е.Н.',
              auditoryCh: '407',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Логистические системы в торговле(Л)',
              teacherCh: 'Полюхович Е.А.',
              auditoryCh: '208',
              link: '-',
              nameZ: 'Анализ торговой деятельности(Л)',
              teacherZ: 'Бобарыкина Е.Н.',
              auditoryZ: '208'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Логистические системы в торговле(Пр)',
              teacherCh: 'Полюхович Е.А.',
              auditoryCh: '208',
              link: '-',
              nameZ: 'Анализ торговой деятельности(Пр)',
              teacherZ: 'Бобарыкина Е.Н.',
              auditoryZ: '208'
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
              nameCh: 'Проектный менеджмент(в профессиональной деятельности)(Пр)',
              teacherCh: 'Ерёменко Ю.А.',
              auditoryCh: '307',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Управление качеством и конкурентоспособностью товаров (Пр)',
              teacherCh: 'Вельгош Н.З.',
              auditoryCh: '011',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Управление качеством и конкурентоспособностью товаров (Л)',
              teacherCh: 'Вельгош Н.З.',
              auditoryCh: '011',
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
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Самостоятельная работа',
              teacherCh: '',
              auditoryCh: '',
              link: '-',
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
    Schedule
  }
}
</script>

<style>

</style>
