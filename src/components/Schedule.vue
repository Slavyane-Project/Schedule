<template>
  <div>
    <v-container class="mt-5">
      <v-row class="justify-center">
        <v-col cols="11" md="12" lg="9" class="justify-center mb-6" v-for="day of days" :key="day.name" flat >
          <v-card>
            <v-card-title class="justify-center">{{ day.name }}</v-card-title>
            <v-card v-for="lesson of day.lessons" :key="lesson.number" class="my-3" elevation="4">
              <v-row> 
                  <v-col cols="5" sm="2"  md="2" lg="2">
                    <v-row class=justify-center>
                    <div class="caption grey--text">Время:</div>
                    </v-row>
                    <hr>
                    <v-row class="justify-center">
                    <div class="pt-4 text-center">{{ lesson.time }}</div>
                    </v-row>
                  </v-col>
                  <v-col cols="7" sm="5"  md="5" lg="6">
                    <div class="caption grey--text">Название предмета:</div>
                    <hr>
                    <div>{{ lesson.nameCh }}</div>
                    <hr>
                    <div>{{ lesson.nameZ }}</div>
                  </v-col>
                  <v-col cols="8" sm="3" md="3" lg="2">
                    <div class="caption grey--text">Преподаватель:</div>
                    <hr>
                    <div>{{ lesson.teacherCh }}</div>
                    <hr>
                    <div>{{ lesson.teacherZ }}</div>
                  </v-col>
                  <v-col cols="4" sm="2" md="2" lg="2">
                    <div class="caption grey--text">Аудитория:</div>
                    <hr>
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
hr{
  border-radius: 5px
}
</style>