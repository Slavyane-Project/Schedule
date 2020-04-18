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
      groupName: 'ГмУ-б-о-181',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Концепция опереж. разв. территор.(Л)',
              teacherCh: 'Подсолонко Е.А.',
              auditoryCh: '512',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Безопасность жизнедеятельности(Л)',
              teacherCh: 'Макаричева А.А.',
              auditoryCh: '512',
              link: '-',
              nameZ: 'Безопасность жизнедеятельности(ПР)',
              teacherZ: 'Макаричева А.А.',
              auditoryZ: '206'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Культурология(ПР)',
              teacherZ: 'Кокорина Е.Г.',
              auditoryZ: '208'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '-',
              nameZ: 'Культурология (Л)',
              teacherZ: 'Кокорина Е.Г.',
              auditoryZ: '405'
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
              nameCh: 'Технол. обесп. служебн. деят.(ПР)',
              teacherCh: 'Донской Д.В.',
              auditoryCh: '208',
              link: '-',
              nameZ: 'Психология(Л)',
              teacherZ: 'Реутова В.В.',
              auditoryZ: '512'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Теория и концепц. гос. упр.(ПР)',
              teacherCh: 'Вершицкий А.В.',
              auditoryCh: '407',
              link: '-',
              nameZ: 'Теория и концепц. гос. упр.(Л)',
              teacherZ: 'Вершицкий А.В.',
              auditoryZ: '406'
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
              nameCh: 'Психология(ПР)',
              teacherCh: 'Реутова В.В.',
              auditoryCh: '403',
              link: '-',
              nameZ: 'Технол. обесп. служебн. деят.(ПР)',
              teacherZ: 'Донской Д.В.',
              auditoryZ: '208'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Теор. и концепц. гос. упр.(ПР)',
              teacherCh: 'Вершицкий А.В.',
              auditoryCh: '204',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
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
              nameCh: 'Концепция опереж. разв. территор.(ПР)',
              teacherCh: 'Подсолонко Е.А.',
              auditoryCh: '204',
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
              auditoryCh: '207',
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
              nameCh: 'Технол. обесп. служебн. деят.(Л)',
              teacherCh: 'Донской Д.В.',
              auditoryCh: '406',
              link: '-',
              nameZ: 'Формир. и контр. исполн. гос. заданий(Л)',
              teacherZ: 'Срибная Е.А.',
              auditoryZ: '406'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Технол. обесп. служебн. деят.(ПР)',
              teacherCh: 'Донской Д.В.',
              auditoryCh: '206',
              link: '-',
              nameZ: 'Формир. и контр. исполн. гос. заданий(ПР)',
              teacherZ: 'Срибная Е.А.',
              auditoryZ: '406'
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
