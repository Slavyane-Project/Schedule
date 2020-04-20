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
      groupName: 'БИ-б-о-191',
      days: [
        {
          name: 'Понедельник',
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Микроэкономика (Л)',
              teacherCh: 'Линский Д.В.',
              auditoryCh: '407',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Микроэкономика (Пр)',
              teacherCh: 'Линский Д.В.',
              auditoryCh: '407',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Основы проектной деятельности (Л)',
              teacherCh: 'Матвеев В.В.',
              auditoryCh: '407',
              link: ' ',
              nameZ: 'Алгоритмизация и программирование (Пр)',
              teacherZ: 'Бакуменко М.А.',
              auditoryZ: '306'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Иностранный язык (Пр)',
              teacherCh: 'Шевель В.Г.',
              auditoryCh: '402',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
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
              nameCh: 'Алгоритмизация и программирование (Пр)',
              teacherCh: 'Бакуменко М.А.',
              auditoryCh: '306 (307)',
              link: '',
              nameZ: '',
              teacherZ: 'Усенко Р.С.',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Русский язык и культура речи (Л)',
              teacherCh: 'Прадид О.Ю.',
              auditoryCh: '512',
              link: ' ',
              nameZ: 'Алгоритмизация и программирование (Л)',
              teacherZ: 'Апатова Н.В.',
              auditoryZ: '307'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Высшая математика (Пр)',
              teacherCh: 'Ремесник Е.С.',
              auditoryCh: '303',
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
              nameCh: 'Высшая математика (Л)',
              teacherCh: 'Попов В.Б.',
              auditoryCh: '404',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Русский язык и культура речи (Пр)',
              teacherCh: 'Каширина М.М.',
              auditoryCh: '303',
              link: '',
              nameZ: 'Введение в профессиональную деятельность (Л)',
              teacherZ: 'Герасимова С.В.',
              auditoryZ: '303'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Иностранный язык (Пр)',
              teacherCh: 'Сидоренко И.Я.',
              auditoryCh: '408 (402)',
              link: ' ',
              nameZ: '',
              teacherZ: 'Миколайчик М.В.',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Алгоритмизация и программирование (Пр)',
              teacherCh: 'Усенко Р.С.',
              auditoryCh: '306',
              link: '',
              nameZ: 'Введение в профессиональную деятельность (Пр)',
              teacherZ: 'Смирнова О.Ю.',
              auditoryZ: '406'
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
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
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
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Физическая культура (Пр)',
              teacherCh: '-',
              auditoryCh: 'Спортзал',
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
              nameCh: 'Предпринимательство в цифровой экономике (Пр)',
              teacherCh: 'Титаренко Д.В.',
              auditoryCh: '307',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Предпринимательство в цифровой экономике (Л)',
              teacherCh: 'Титаренко Д.В.',
              auditoryCh: '307',
              link: '',
              nameZ: 'Основы проектной деятельности (Пр)',
              teacherZ: 'Кутузов В.В.',
              auditoryZ: '307'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Основы искусственного интеллекта (Л)',
              teacherCh: 'Бакуменко М.А.',
              auditoryCh: '307',
              link: ' ',
              nameZ: 'Основы искусственного интеллекта (Пр)',
              teacherZ: 'Бакуменко М.А.',
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
