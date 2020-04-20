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
      groupName: 'ГмУ-б-о-163',
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Самостоятельная   работа',
              teacherCh: '',
              auditoryCh: '',
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
              auditoryZ: '-'
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Государственная и муниципальная служба (Л)',
              teacherCh: 'Гиндес Е.Г.',
              auditoryCh: '403',
              link: '',
              nameZ: 'Международные организации и объединения (Л)',
              teacherZ: 'Смерницкая Е. В.',
              auditoryZ: '403',
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Государственная и муниципальная служба (Пр)',
              teacherCh: 'Гиндес Е.Г.',
              auditoryCh: '403',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Государственное обеспечение  бюджетного процесса (Пр)',
              teacherCh: 'Анисимова Н.Ю.',
              auditoryCh: '406',
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
              nameCh: 'Муниципальный менеджмент (Пр)',
              teacherCh: 'Анисимова Н.Ю.',
              auditoryCh: '404',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Управление информационными потоками (Л)',
              teacherCh: 'Донской Д. В.',
              auditoryCh: '406',
              link: '',
              nameZ: 'Государственное обеспечение бюджетного процесса (Л)',
              teacherZ: 'Анисимова Н.Ю.',
              auditoryZ: '406'
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Управление информационными потоками (Пр)',
              teacherCh: 'Донской Д. В.',
              auditoryCh: '206',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
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
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Муниципальный менеджмент (Л)',
              teacherCh: 'Анисимова Н.Ю.',
              auditoryCh: '403',
              link: '',
              nameZ: 'Кадровое обеспечение госуд. и муниципального управления (Л)',
              teacherZ: 'Глушко Ю.В.',
              auditoryZ: '403'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Кадровое обеспечение госуд. и муниципального управления (Пр)',
              teacherCh: 'Глушко Ю.В.',
              auditoryCh: '406',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '5',
              time: '16:40-18:10',
              nameCh: 'Международные  организации и объединения (Пр)',
              teacherCh: 'Смерницкая Е. В.',
              auditoryCh: '406',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
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
              link: '',
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
              link: '-',
              nameZ: 'Стратегическое управление территориальным развитием (Пр)',
              teacherZ: 'Процай А.Ф.',
              auditoryZ: '402'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: '-',
              teacherCh: '-',
              auditoryCh: '-',
              link: '',
              nameZ: 'Стратегическое управление территориальным развитием (Л)',
              teacherZ: 'Процай А.Ф.',
              auditoryZ: '403'
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
