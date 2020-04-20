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
      groupName: 'Э-б-о-182',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Управление личными финансами(ПР)',
              teacherCh: 'Машьянова Е.Е.',
              auditoryCh: '406',
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
              auditoryCh: '405',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Мировая экономика и МЭО (Л)',
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
              nameCh: 'Экономика(ПР)',
              teacherCh: 'Бабин М.М.',
              auditoryCh: '508',
              link: '-',
              nameZ: 'Психология(ПР)',
              teacherZ: 'Реутова В.В.',
              auditoryZ: '511',
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
              nameCh: 'Мировая экономика и МЭО(ПР)',
              teacherCh: 'Горда О.С.',
              auditoryCh: '-',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Организация дел в бух.учётё(Л)',
              teacherCh: 'Ежакова Н.В.',
              auditoryCh: '09',
              link: '-',
              nameZ: 'Организация дел в бух.учёте(ПР)',
              teacherZ: 'Апалько А.А.',
              auditoryZ: '09'
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
              nameCh: 'Финансы(ПР)',
              teacherCh: 'Польская С.И.',
              auditoryCh: '207',
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
              teacherCh: 'Кулякина Е.Л.',
              auditoryCh: '02',
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
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '03',
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
    Schedule,
    Schedule_for_mobile
  }
}
</script>

<style>

</style>
