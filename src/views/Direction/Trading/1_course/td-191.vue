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
      groupName: 'ТД-б-о-191',
      days: [
        {
          name: 'Понедельник',
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Экономика России (Пр)',
              teacherCh: 'Побирченко В.В.',
              auditoryCh: '403',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Безопасность жизнедеятельности (Л)',
              teacherCh: 'Макаричева А.А.',
              auditoryCh: '403',
              link: '',
              nameZ: 'Экономика России (Л)',
              teacherZ: 'Побирченко В.В.',
              auditoryZ: '403'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Иностранный язык (Пр)',
              teacherCh: 'Сидоренко И.Я',
              auditoryCh: '408 (402)',
              link: ' ',
              nameZ: '',
              teacherZ: 'Миколайчик М.В.',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Безопасность жизнедеятельности (Пр)',
              teacherCh: 'Макаричева А.А.',
              auditoryCh: '403',
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
              nameCh: 'Основы проектной деятельности (Л)',
              teacherCh: 'Ерёменко Ю.А.',
              auditoryCh: '011',
              link: '-',
              nameZ: 'Введение в профессиональную деятельность (Л)',
              teacherZ: 'Реутов В.Е.',
              auditoryZ: '011',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Основы проектной деятельности (Пр)',
              teacherCh: 'Ерёменко Ю.А.',
              auditoryCh: '011',
              link: '',
              nameZ: 'Введение в профессиональную деятельность  (Пр)',
              teacherZ: 'Улановская О.Н.',
              auditoryZ: '011'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Русский язык и культура речи (Л)',
              teacherCh: 'Прадид О.Ю.',
              auditoryCh: '512',
              link: ' ',
              nameZ: 'Русский язык и культура речи (Пр)',
              teacherZ: 'Каширина М.М.',
              auditoryZ: '208'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
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
              nameCh: 'Высшая математика (Л)',
              teacherCh: 'Попов В.Б.',
              auditoryCh: '404',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Высшая математика (Пр)',
              teacherCh: 'Смирнова О.Ю.',
              auditoryCh: '404',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Инфраструктура товарного рынка (Пр)',
              teacherCh: 'Вельгош Н.З',
              auditoryCh: '404',
              link: ' ',
              nameZ: 'Инфраструктура товарного рынка (Л)',
              teacherZ: 'Вельгош Н.З',
              auditoryZ: '403'
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
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
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
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
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
              nameCh: 'Основы организации торговли (Л)',
              teacherCh: 'Гутникова О.Н.',
              auditoryCh: '011',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Основы организации торговли (Пр)',
              teacherCh: 'Гутникова О.Н.',
              auditoryCh: '011',
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
