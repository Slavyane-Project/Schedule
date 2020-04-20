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
      groupName: 'Э-б-о-194',
      days: [
        {
          name: 'Понедельник',
          lessons: [
            {
              number: '1',
              time: '9:50-11:20',
              nameCh: 'Иностранный язык (Пр)',
              teacherCh: 'Гулакова И.А. (Борзова И.А.)',
              auditoryCh: '09 (010)',
              link: '-',
              nameZ: '',
              teacherZ: '',
              auditoryZ: '',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Основы проектной деятельности (Пр)',
              teacherCh: 'Севастьянова О.В.',
              auditoryCh: '207',
              link: '',
              nameZ: 'Безопасность жизнедеятельности (Пр)',
              teacherZ: 'Скоромная Н.И.',
              auditoryZ: '207'
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
              nameCh: 'Русский язык и культура речи (Пр)',
              teacherCh: 'Прадид О.Ю.',
              auditoryCh: '207',
              link: '-',
              nameZ: 'Корпоративная культура (Пр)',
              teacherZ: 'Зименкова Е.Н.',
              auditoryZ: '207',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Теория вероятности и математическая статистика (Пр)',
              teacherCh: 'Акинина Л.Н.',
              auditoryCh: '303',
              link: '',
              nameZ: '',
              teacherZ: '',
              auditoryZ: ''
            },
            {
              number: '3',
              time: '13:20-14:50',
              nameCh: 'Корпоративная культура (Л)',
              teacherCh: 'Царенко Н.В.',
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
              link: '',
              nameZ: '-',
              teacherZ: '-',
              auditoryZ: '-',
            },
            {
              number: '2',
              time: '11:30-13:00',
              nameCh: 'Теория вероятности и математическая статистика (Л)',
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
              nameCh: 'Микроэкономика (Пр)',
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
              nameCh: 'Высшая математика (Пр)',
              teacherCh: 'Акинина Л.Н.',
              auditoryCh: '407',
              link: '',
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
              nameCh: 'Микроэкономика (Пр)',
              teacherCh: 'Байракова И.В.',
              auditoryCh: '207',
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
    Schedule,
    Schedule_for_mobile
  }
}
</script>

<style>

</style>
