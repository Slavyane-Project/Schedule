<template>
  <div>
    <Schedule class="visible-md-and-up" :days="days" :groupName="groupName" />
    <Schedule_for_mobile class="visible-sm-and-down" :days="days" :groupName="groupName" />
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Schedule_for_mobile from "@/components/Schedule_for_mobile.vue";

export default {
  data () {
    return {
      groupName: 'БИ-м-о-191',
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
          name: "Вторник",
          lessons: [
            {
              number: '2',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Модели экономического поведения(Пр)',
              teacherCh: 'Акинина Л.Н.',
              auditoryCh: '306',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Рискология виртуального предпринимательства(Пр)',
              teacherCh: 'Бакуменко М.А.',
              auditoryCh: '305',
              link: '-',
              nameZ: 'Рискология виртуального предпринимательства(Л)',
              teacherZ: 'Апатова Н.В.',
              auditoryZ: '305'
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Рискология виртуального предпринимательства(Пр)',
              teacherCh: 'Бакуменко М.А.',
              auditoryCh: '305',
              link: '-',
              nameZ: 'Модели экономического поведения(Л)',
              teacherZ: 'Апатова Н.В.',
              auditoryZ: '305'
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
              nameCh: 'Проектный менеджмент(в профессиональной деят-сти)(Пр)',
              teacherCh: 'Солдатова С.А.',
              auditoryCh: '408',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Проектирование электронного предприятия(ЛР)',
              teacherCh: 'Герасимова С.В.',
              auditoryCh: '403',
              link: '-',
              nameZ: 'Проектирование электронного предприятия(ЛР)',
              teacherZ: 'Герасимова С.В.',
              auditoryZ: '303'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Криптографические методы защиты информации(Л)',
              teacherCh: 'Бойченко О.В.',
              auditoryCh: '303',
              link: '-',
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
              number: '2',
              time: '11:30-13:00',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
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
              nameCh: 'Проектный менеджмент(в профессиональной деят-сти)(Пр)',
              teacherCh: 'Круликовский А.П.',
              auditoryCh: '208',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Криптографические методы защиты информации(Пр)',
              teacherCh: 'Смирнова О.Ю.',
              auditoryCh: '208',
              link: '-',
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
    Schedule,
    Schedule_for_mobile
  }
}
</script>

<style>

</style>
