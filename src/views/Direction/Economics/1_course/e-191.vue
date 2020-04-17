<template>
  <Schedule
    :days="days"
    :groupName="groupName"
  />
</template>


<script>
import Schedule from '@/components/Schedule.vue'

export default {
  data () {
    return {
      groupName: 'Э-б-о-191',
      days: [
        {
          name: 'Понедельник',
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Безопасность жизнедеятельности (Пр)',
              teacherCh: 'Цикалов В.В.',
              auditoryCh: '02',
              link: '-',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Иностранный язык (Пр)',
              teacherCh: 'Сидорченко И.Я. (Миколайчик М.В.)',
              auditoryCh: '408 (402)',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Безопасность жизнедеятельности (Л)',
              teacherCh: 'Цикалов В.В.',
              auditoryCh: '201',
              link: ' ',
              nameZ: 'Основы проектной деятельности (Л)',
              teacherZ: 'Севастьянова О.В.',
              auditoryZ: '201'
            },
            {
              number: '4',
              time: '15:00-16:30',
              nameCh: 'Университетское образование (Л)',
              teacherCh: 'Абибулаев М.С.',
              auditoryCh: '201',
              link: '',
              nameZ: 'Основы проектной деятельности (Пр)',
              teacherZ: 'Севастьнова О.В.',
              auditoryZ: '207'
            },
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Микроэкономика (Пр)',
              teacherCh: 'Троян И.А.',
              auditoryCh: '403',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Русский язык и культура речи (Пр)',
              teacherCh: 'Прадид О.Ю.',
              auditoryCh: '207',
              link: '',
              nameZ: 'Корпоративная культура (Пр)',
              teacherZ: 'Зименкова Е.Н.',
              auditoryZ: '207'
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Корпоративная культура (Л)',
              teacherCh: 'Зименкова Е.Н.',
              auditoryCh: '201',
              link: ' ',
              nameZ: 'Русский язык и культура речи (Л)',
              teacherZ: 'Прадид О.Ю.',
              auditoryZ: '201'
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
              nameCh: 'Теория вероятностей (Пр)',
              teacherCh: 'Акинина Л.Н.',
              auditoryCh: '303',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Теория вероятностей и математическая статистика (Л)',
              teacherCh: 'Сигал А.В.',
              auditoryCh: '201',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Микроэкономика (Л)',
              teacherCh: 'Троян И.А.',
              auditoryCh: '201',
              link: ' ',
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
              nameCh: 'Самостоятельная работа',
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
              nameCh: 'Самостоятельная работа',
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
              nameCh: 'Самостоятельная работа',
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
              nameCh: 'Высшая математика (Пр)',
              teacherCh: 'Галионов А.И.',
              auditoryCh: '303',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Высшая математика (Л)',
              teacherCh: 'Галионов А.И.',
              auditoryCh: '201',
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
    Schedule
  }
}
</script>

<style>

</style>
