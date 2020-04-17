<template>
  <div>
    <v-container class="mt-5">
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="6"
          class="justify-center mb-6"
          v-for="day of days"
          :key="day.name"
          flat
        >
          <v-card min-height="500" class="deep-orange lighten-2">
            <v-card-title class="justify-center white--text">{{ day.name }}</v-card-title>
            <v-card
              v-for="lesson of day.lessons"
              :key="lesson.number"
              class="mb-3 mx-2"
              elevation="5"
            >
              <v-row>
                <v-col cols="12" sm="2" md="2" lg="2">
                  <v-row class="justify-center">
                    <div class="caption black--text">Время:</div>
                  </v-row>
                  <hr />
                  <div v-if="lesson.nameZ!=''">
                    <v-row class="justify-center">
                      <v-col class="align-center">
                        <div class="text-center">{{ lesson.time }}</div>
                      </v-col>
                    </v-row>
                  </div>
                  <div v-else>
                    <v-row class="justify-center">
                      <div class="text-center">{{ lesson.time }}</div>
                    </v-row>
                  </div>
                </v-col>
                <v-col cols="12" sm="5" md="5" lg="6">
                  <v-row class="justify-center">
                    <div class="caption black--text">Название предмета:</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div class="text-center red--text">{{ lesson.nameCh }}</div>
                  </v-row>
                  <hr v-if="lesson.nameZ!='' " />
                  <v-row class="justify-center">
                    <div class="text-center">{{ lesson.nameZ }}</div>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="2">
                  <v-row class="justify-center">
                    <div class="caption black--text">Преподаватель:</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div class="text-center red--text">{{ lesson.teacherCh }}</div>
                  </v-row>
                  <hr v-if="lesson.nameZ!='' " />
                  <v-row class="justify-center">
                    <div class="text-center">{{ lesson.teacherZ }}</div>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="2" md="2" lg="2">
                  <v-row class="justify-center">
                    <div class="caption black--text justify-center">Аудитория:</div>
                  </v-row>
                  <hr />
                  <v-row class="red--text justify-center">
                    <div>{{ lesson.auditoryCh }}</div>
                  </v-row>
                  <hr v-if="lesson.nameZ!='' " />
                  <v-row class="justify-center">
                    <div>{{ lesson.auditoryZ }}</div>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    days: {
      type: Array,
      required: true
    }
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
</style>
