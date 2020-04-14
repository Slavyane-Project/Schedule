<template>
  <div>
    <v-container class="mt-5">
      <v-row class="justify-center">
        <v-col md="4" lg="4" class="justify-center mb-6" v-for="day of days" :key="day.name" flat >
          <v-card>
            <v-card-title class="justify-center">{{ day.name }}</v-card-title>
            <v-card v-for="lesson of day.lessons" :key="lesson.number" class="my-1">
              <v-row> 
                  <v-col cols="6" sm="4"  md="3">
                    <div class="caption grey--text ml-7">Время:</div>
                    <div class="ml-2 pt-2">{{ lesson.time }}</div>
                  </v-col>
                  <v-col cols="6" sm="4"  md="3">
                    <div class="caption grey--text">Название:</div>
                    <div>{{ lesson.nameCh }}</div>
                    <hr>
                    <div>{{ lesson.nameZ }}</div>
                  </v-col>
                  <v-col cols="6" sm="4" md="3">
                    <div class="caption grey--text">Преподаватель:</div>
                    <div>{{ lesson.teacherCh }}</div>
                    <hr>
                    <div>{{ lesson.teacherZ }}</div>
                  </v-col>
                  <v-col cols="6" sm="4" md="3">
                    <div class="caption grey--text">Номер аудитории:</div>
                    <div>{{ lesson.auditoryCh }}</div>
                    <hr>
                    <div>{{ lesson.auditoryZ }}</div>
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
}
</script>

<style>

</style>