<template>
  <div>
    <v-container class="mt-5">
      <h1>Расписание группы: {{groupName}}</h1>
      <v-row class="justify-center">
        <v-col
          cols="12"
          sm="12"
          class="justify-center align-middle mb-6 day"
          v-for="day of days"
          :key="day.name"
          flat
        >
          <v-card
            class="paddingFix deep-orange lighten-2"
          >
            <v-card-title class="justify-center white--text">{{ day.name }}</v-card-title>
            <div class="divCenter">
              <v-card
                v-for="lesson of day.lessons"
                :key="lesson.number"
                class="mb-3 mx-2"
                elevation="5"
              >
                <v-row>
                  <v-col class="pa-0" cols="12" sm="2" md="2" lg="2">
                    <div class="paddingFixTime">
                      <v-row class="justify-center">
                        <div class="caption black--text">Время:</div>
                      </v-row>
                      <hr />
                      <v-row class="pa-0 justify-center">
                        <v-col class="align-center">
                          <div class="pa-0 text-center">{{ lesson.time }}</div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="5" md="5" lg="6">
                    <div class="paddingFix">
                      <v-row class="justify-center">
                        <div class="caption black--text">Название предмета:</div>
                      </v-row>
                      <hr />
                      <div v-if="lesson.nameZ!=''">
                        <v-row class="justify-center">
                          <div class="text-center textCh">{{ lesson.nameCh }}</div>
                        </v-row>
                        <hr />
                        <v-row class="justify-center">
                          <div class="text-center textZ">{{ lesson.nameZ }}</div>
                        </v-row>
                      </div>
                      <div v-else>
                        <v-row class="justify-center">
                          <v-col class="align-center">
                            <div class="text-center">{{ lesson.nameCh }}</div>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="3" md="3" lg="2">
                    <div class="paddingFix">
                      <v-row class="justify-center">
                        <div class="caption black--text">Преподаватель:</div>
                      </v-row>
                      <hr />
                      <div v-if="lesson.teacherZ!=''">
                        <v-row class="justify-center">
                          <div class="text-center textCh">{{ lesson.teacherCh }}</div>
                        </v-row>
                        <hr />
                        <v-row class="justify-center">
                          <div class="text-center textZ">{{ lesson.teacherZ }}</div>
                        </v-row>
                      </div>
                      <div v-else>
                        <v-row class="justify-center">
                          <v-col class="align-center">
                            <div class="text-center">{{ lesson.teacherCh }}</div>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="2" md="2" lg="2">
                    <div class="paddingFix">
                      <v-row class="justify-center">
                        <div class="caption black--text justify-center">Аудитория:</div>
                      </v-row>
                      <hr />
                      <div v-if="lesson.auditoryZ!=''">
                        <v-row class="justify-center">
                          <div class="text-center textCh">{{ lesson.auditoryCh }}</div>
                        </v-row>
                        <hr />
                        <v-row class="justify-center">
                          <div class="text-center textZ">{{ lesson.auditoryZ }}</div>
                        </v-row>
                      </div>
                      <div v-else>
                        <v-row class="justify-center">
                          <v-col class="align-center">
                            <div class="text-center">{{ lesson.auditoryCh }}</div>
                          </v-col>
                        </v-row>
                      </div>
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

  name: "day",
  mounted() {
    gsap.from(".day", {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      ease: "power1",
      stagger: {
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
.blockStyle {
  vertical-align: middle;
}

.paddingFix {
  padding-left: 12px;
  padding-right: 12px;
}

.paddingFixTime {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

.textCh {
  color: #1E88E5;
}

.textZ {
  color: #E53935;
}
</style>
