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
      groupName: 'ГмУ-б-о-192',
      days: [
        {
          name: 'Понедельник',
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Информ.-коммуникац. технологии и эл. правительство (Пр)',
              teacherCh: 'Онищенко С.К.',
              auditoryCh: '206',
              link: '-',
              nameZ: 'Основы научных исследований (Пр)',
              teacherZ: 'Вершицкий А.В.',
              auditoryZ: '404',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Гос. управление производственными силами (Л)',
              teacherCh: 'Срибная Е.А.',
              auditoryCh: '404',
              link: '',
              nameZ: 'Основы научных исследований (Л)',
              teacherZ: 'Вершицкий А.В.',
              auditoryZ: '404'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Информ.-коммуникац. технологии и эл. правительство (Л)',
              teacherCh: 'Онищенко С.К.',
              auditoryCh: '404',
              link: ' ',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Гос. управление производственными силами (Пр)',
              teacherCh: 'Шейко А.В.',
              auditoryCh: '404',
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
              number: '1',
              time: '9:50-11:20',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Информ.-коммуникац. технологии и эл. правительство (Пр)',
              teacherZ: 'Онищенко С.К.',
              auditoryZ: '206',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Информ.-коммуникац. технологии и эл. правительство (Л)',
              teacherCh: 'Онищенко С.К.',
              auditoryCh: '206',
              link: '',
              nameZ: 'Основы проектной деятельности (Пр)',
              teacherZ: 'Подсолонко Е.А.',
              auditoryZ: '03'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Русский язык и культура речи (Л)',
              teacherCh: 'Прадид О.Ю.',
              auditoryCh: '512',
              link: ' ',
              nameZ: 'Основы проектной деятельности (Л)',
              teacherZ: 'Подсолонко Е.А.',
              auditoryZ: '506'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Русский язык и культура речи (Пр)',
              teacherCh: 'Прадид О.Ю.',
              auditoryCh: '512',
              link: '',
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
              nameCh: 'Введение в профессиональную деятельность (Пр)',
              teacherCh: 'Гиндес Е.Г.',
              auditoryCh: '011',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Введение в профессиональную деятельность (Л)',
              teacherCh: 'Гиндес Е.Г.',
              auditoryCh: '011',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Документальный оборот в органах гос.власти (Пр)',
              teacherCh: 'Гармидер А.А.',
              auditoryCh: '02',
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
              nameCh: 'Документационный оборот в органах гос. власти (Л)',
              teacherCh: 'Гармидер А.А.',
              auditoryCh: '303',
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Иностранный язык (Пр)',
              teacherCh: 'Мележик К.А. (Харченко М.А.) (Шевель В.Г.)',
              auditoryCh: '02 (03) (09)',
              link: ' ',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Физическая культура (Пр)',
              teacherCh: '-',
              auditoryCh: 'Кафедра физкультуры и спорта',
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
              nameCh: 'Экономика общественного сектора (Пр)',
              teacherCh: 'Кухар В.В.',
              auditoryCh: '506',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Экономика общественного сектора (Л)',
              teacherCh: 'Кухар В.В.',
              auditoryCh: '506',
              link: '',
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
              link: ' ',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
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
