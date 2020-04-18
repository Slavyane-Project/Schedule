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
  data() {
    return {
      groupName: "БИ-181",
      days: [
        {
          name: "Понедельник",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: "-",
              link: "-",
              nameZ: "Проектирование ПИ(Л)",
              teacherZ: "Королёв О.Л.",
              auditoryZ: "306"
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Безопасность жизнедеятельности(Л)",
              teacherCh: "Макаричева А.А.",
              auditoryCh: "03",
              link: "-",
              nameZ: "Проектирование ПИ(ПР)",
              teacherZ: "Королёв О.Л.",
              auditoryZ: "306"
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Культурология(Л)",
              teacherCh: "Кравченко И.В.",
              auditoryCh: "03",
              link: "-",
              nameZ: "Безопасноть жизнедеятельности",
              teacherZ: "Скоромная Н.И.",
              auditoryZ: "207"
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "Культурология",
              teacherCh: "Кравченко И.В.",
              auditoryCh: "03",
              link: "-",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: "-"
            }
          ]
        },

        {
          name: "Вторник",
          lessons: [
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Эконометрика(Л)",
              teacherCh: "Иванов С.В.",
              auditoryCh: "406",
              link: "-",
              nameZ: "Психология(Л)",
              teacherZ: "Реутова В.В.",
              auditoryZ: "512"
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Анализ данных",
              teacherCh: "Остапенко И.Н.",
              auditoryCh: "206",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: "-",
              link: "-",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: "-"
            },
            {
              number: "5",
              time: "16:40-18:10",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: "-",
              link: "-",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: "-"
            }
          ]
        },

        {
          name: "Среда",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: "Психология(ПР)",
              teacherCh: "Реутова В.В.",
              auditoryCh: "403",
              link: "-",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: "-"
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Анализ данных(ПР)",
              teacherCh: "Усенко Р.С.",
              auditoryCh: "306",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Эконометрика(ПР)",
              teacherCh: "Усенко Р.С.",
              auditoryCh: "306",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "Физическая культура",
              teacherCh: "Сердюков В.В.",
              auditoryCh: "Спорт зал",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            }
          ]
        },

        {
          name: "Четверг",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: "-",
              link: "-",
              nameZ: "Эконометрика(ПР)",
              teacherZ: "Усенко Р.С.",
              auditoryZ: "306"
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Жизненный цикл ИС(Л)",
              teacherCh: "Королёв О.Л.",
              auditoryCh: "208",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "Жизненный цикл ИС(ПР)",
              teacherCh: "Усенко Р.С.",
              auditoryCh: "208",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: "-",
              link: "-",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: "-"
            }
          ]
        },

        {
          name: "Пятница",
          lessons: [
            {
              number: "1",
              time: "9:50-11:20",
              nameCh: "Проектирование ИС(Л)",
              teacherCh: "Бакуменко М.А.",
              auditoryCh: "208",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            },
            {
              number: "2",
              time: "11:30-13:00",
              nameCh: "Проектирование ИС",
              teacherCh: "Бакуменко М.А.",
              auditoryCh: "208",
              link: "-",
              nameZ: "",
              teacherZ: "",
              auditoryZ: ""
            },
            {
              number: "3",
              time: "13:20-14:50",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: "-",
              link: "-",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: "-"
            },
            {
              number: "4",
              time: "15:00-16:30",
              nameCh: "-",
              teacherCh: "-",
              auditoryCh: "-",
              link: "-",
              nameZ: "-",
              teacherZ: "-",
              auditoryZ: "-"
            }
          ]
        }
      ]
    };
  },

  components: {
    Schedule,
    Schedule_for_mobile
  }
};
</script>
<style scoped>
</style>
