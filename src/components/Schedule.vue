<template>
  <div>
    <v-container class="mt-5">
      <h1>Расписание группы: {{groupName}}</h1>
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="6"
          class="justify-center align-middle mb-6 cards"
          v-for="day of days"
          :key="day.name"
          flat
        >
          <v-card min-height="510" max-height="510" class="deep-orange lighten-2">
            <v-card-title class="justify-center white--text">{{ day.name }}</v-card-title>
            <div min-height="410" max-height="410" class="divCenter">
              <v-card
                v-for="lesson of day.lessons"
                :key="lesson.number"
                class="mb-1 mx-2 "
                elevation="5"
                min-height="90"
                max-height="90"
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
                        <div class="text-center blue--text">{{ lesson.nameCh }}</div>
                      </v-row>
                      <hr />
                      <v-row class="justify-center">
                        <div class="text-center red--text">{{ lesson.nameZ }}</div>
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
import gsap from 'gsap'


export default {
  props: {
    groupName: {
        type:String,
        required: true
    },
    days: {
      type: Array,
      required: true
    }
  },
  components: {

  },

name: "cards",
  mounted() {
    gsap.from('.cards', {
      duration: 1,
      opacity: 0,
      scale: 0,
      ease: 'power3',
      stagger: {
        each: 0.1,
        from: 'edges'
      }
    })
    
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
.divCenter {
  margin: 0 auto;
  padding: 2%;
}
</style>
