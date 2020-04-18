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
      groupName: 'Э-б-о-183',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Финансы(ПР)',
              teacherCh: 'Польская С.И.',
              auditoryCh: '405',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Управление личными финансами(ПР)',
              teacherCh: 'Машьянова Е.Е.',
              auditoryCh: '406',
              link: '',
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
              nameCh: 'Психология(ПР)',
              teacherCh: 'Реутова В.В.',
              auditoryCh: '511',
              link: '-',
              nameZ: 'Экономика природопользования(ПР)',
              teacherZ: 'Бабин М.М.',
              auditoryZ: '303'
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
              nameCh: 'Экономика предприятия(ПР)',
              teacherCh: 'Каминская А.О.',
              auditoryCh: '506',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Мировая экономика и МЭО(ПР)',
              teacherCh: 'Горда О.С.',
              auditoryCh: '207',
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
              nameCh: 'Междунар. планир. и контроль ПД(Л)',
              teacherCh: 'Мираньков Д.Б.',
              auditoryCh: '011',
              link: '-',
              nameZ: 'Междунар. планир. и контроль ПД(ПР)',
              teacherZ: 'Мираньков Д.Б.',
              auditoryZ: '011',
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
              nameCh: 'Бухгалтерский учёт(ПР)',
              teacherCh: 'Богомолова Е.А.',
              auditoryCh: '03',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Бухгалтерский учёт(Л)',
              teacherCh: 'Натарова Е.В.',
              auditoryCh: '512',
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
