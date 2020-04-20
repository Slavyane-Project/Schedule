<template>
  <div>
    <v-container class="containerStyle">
      <h1>Расписание группы: {{groupName}}</h1>
      <v-row class="justify-center">
        <v-col cols="12" md="12" lg="6" class="mb-6 cards" v-for="day of days" :key="day.name" flat>
          <v-card
            class="deep-orange lighten-2"
            :class="{first: $vuetify.breakpoint.md, second: $vuetify.breakpoint.lg, third: $vuetify.breakpoint.xl}"
          >
            <v-card-title class="justify-center white--text">{{ day.name }}</v-card-title>
            <div class="divCenter">
              <v-card
                v-for="lesson of day.lessons"
                :key="lesson.number"
                class="mb-1 mx-2"
                :class="{first1: $vuetify.breakpoint.md, second1: $vuetify.breakpoint.lg, third1: $vuetify.breakpoint.xl}"
                elevation="5"
              >
                <v-row>
                  <v-col cols="12" sm="2" md="2" lg="2">
                    <v-row class="justify-center">
                      <div class="caption black--text">Время:</div>
                    </v-row>
                    <hr />
                    <v-row class="justify-center">
                      <v-col class="align-center">
                        <div class="text-center">{{ lesson.time }}</div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" sm="5" md="5" lg="6">
                    <v-row class="justify-center">
                      <div class="caption black--text">Название предмета:</div>
                    </v-row>
                    <hr />
                    <div v-if="lesson.nameZ!=''">
                      <v-row class="justify-center">
                        <div class="text-center blue--text lessonStyle">{{ lesson.nameCh }}</div>
                      </v-row>
                      <hr />
                      <v-row class="justify-center">
                        <div class="text-center red--text lessonStyle">{{ lesson.nameZ }}</div>
                      </v-row>
                    </div>
                    <div v-else>
                      <v-row class="justify-center">
                        <v-col class="align-center">
                          <div class="text-center">{{ lesson.nameCh }}</div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="3" md="3" lg="2">
                    <v-row class="justify-center">
                      <div class="caption black--text">Преподаватель:</div>
                    </v-row>
                    <hr />
                    <div v-if="lesson.teacherZ!=''">
                      <v-row class="justify-center">
                        <div class="text-center blue--text">{{ lesson.teacherCh }}</div>
                      </v-row>
                      <hr />
                      <v-row class="justify-center">
                        <div class="text-center red--text">{{ lesson.teacherZ }}</div>
                      </v-row>
                    </div>
                    <div v-else>
                      <v-row class="justify-center">
                        <v-col class="align-center">
                          <div class="text-center">{{ lesson.teacherCh }}</div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="2" md="2" lg="2">
                    <v-row class="justify-center">
                      <div class="caption black--text justify-center">Аудитория:</div>
                    </v-row>
                    <hr />
                    <div v-if="lesson.auditoryZ!=''">
                      <v-row class="justify-center">
                        <div class="text-center blue--text">{{ lesson.auditoryCh }}</div>
                      </v-row>
                      <hr />
                      <v-row class="justify-center">
                        <div class="text-center red--text">{{ lesson.auditoryZ }}</div>
                      </v-row>
                    </div>
                    <div v-else>
                      <v-row class="justify-center">
                        <v-col class="align-center">
                          <div class="text-center">{{ lesson.auditoryCh }}</div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    groupName: {
      type: String,
      required: true
    },
    days: {
      type: Array,
      required: true
    }
  },
  components: {},

  name: "cards",
  mounted() {
    gsap.from(".cards", {
      duration: 1,
      opacity: 0,
      scale: 0,
      ease: "power3",
      stagger: {
        each: 0.1,
        from: "edges"
      }
    });
  }
};
</script>

<style>
hr {
  border-radius: 5px;
}

.divCenter {
  margin: 0 auto;
  padding: 1%;
}

.lessonStyle {
  word-wrap: normal;
}

.first {
  height: 525px;
  border-color: blue;
}

.second {
  height: 535px;
  border-color: blue;
}

.third {
  height: 510px;
}

.first1 {
  height: 107px;
  border-color: blue;
}

.second1 {
  height: 110px;
  border-color: blue;
}

.third1 {
  height: 100px;
}
</style>
