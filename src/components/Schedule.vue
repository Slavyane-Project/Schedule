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
          <v-card class="grey">
            <v-card-title class="justify-center white--text">{{ day.name }}</v-card-title>
            <v-card
              v-for="lesson of day.lessons"
              :key="lesson.number"
              class="my-3 mx-2"
              elevation="4"
            >
              <v-row>
                <v-col cols="12" sm="2" md="2" lg="2">
                  <v-row class="justify-center">
                    <div class="caption grey--text">Время:</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div class="pt-4 text-center">{{ lesson.time }}</div>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="5" md="5" lg="6">
                  <v-row class="justify-center">
                    <div class="caption grey--text">Название предмета:</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div class="text-center red--text">{{ lesson.nameCh }}</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div class="text-center">{{ lesson.nameZ }}</div>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="2">
                  <v-row class="justify-center">
                    <div class="caption grey--text">Преподаватель:</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div class="text-center red--text">{{ lesson.teacherCh }}</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div class="text-center">{{ lesson.teacherZ }}</div>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="2" md="2" lg="2">
                  <v-row class="justify-center">
                    <div class="caption grey--text justify-center">Аудитория:</div>
                  </v-row>
                  <hr />
                  <v-row class="justify-center">
                    <div>{{ lesson.auditoryCh }}</div>
                  </v-row>
                  <hr />
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
</style>