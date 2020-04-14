<template>
  <div>
    <v-container class="mt-5">
      <v-row class="justify-center">
        <v-col class="justify-center" cols="12" sm="6" md="4" lg="4" v-for="day of days" :key="day.name">
          <v-card shaped flat elevation="3" class="text-center ma-3">
            <v-list-item v-for="day of days" :key="day.name">
              {{ day.name }}
            </v-list-item>
            <v-list-item two-line v-for="lesson of day" :key="lesson.number">
              <v-list-item-content>
                <div class="overline mb-4">{{ lesson.name }}</div>
                <v-list-item-title class="headline mb-1">{{ lesson.teacher }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-text class="pb-6">
              <div class="title black--text">{{ lesson.time }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
data () {
  return {
    days: [
      {name: "Понедельник",
        lessons: [
          {number: '1', time: "09:50-11:20", name: 'ЖЦИС', teacher: 'Королёв О.Л.', link: ''},
          {number: '2', time: "11:30-13:00", name: 'Культурология', teacher: 'Кравченко И.С.', link: ''},
          {number: '3', time: "13:20-14:50", name: 'БЖД', teacher: 'Предпопие', link: ''}
        ]
      },
      
      {name: "Вторник",
        lessons: [
          {number: '1', time: "09:50-11:20", name: 'ЖЦИС', teacher: 'Королёв О.Л.', link: ''},
          {number: '2', time: "11:30-13:00", name: 'Культурология', teacher: 'Кравченко И.С.', link: ''},
          {number: '3', time: "13:20-14:50", name: 'БЖД', teacher: 'Предпопие', link: ''}
        ]
      },

      {name: "Среда",
        lessons: [
          {number: '1', time: "09:50-11:20", name: 'ЖЦИС', teacher: 'Королёв О.Л.', link: ''},
          {number: '2', time: "11:30-13:00", name: 'Культурология', teacher: 'Кравченко И.С.', link: ''},
          {number: '3', time: "13:20-14:50", name: 'БЖД', teacher: 'Предпопие', link: ''}
        ]
      },

      {name: "Четверг",
        lessons: [
          {number: '1', time: "09:50-11:20", name: 'ЖЦИС', teacher: 'Королёв О.Л.', link: ''},
          {number: '2', time: "11:30-13:00", name: 'Культурология', teacher: 'Кравченко И.С.', link: ''},
          {number: '3', time: "13:20-14:50", name: 'БЖД', teacher: 'Предпопие', link: ''}
        ]
      },

      {name: "Пятница",
        lessons: [
          {number: '1', time: "09:50-11:20", name: 'ЖЦИС', teacher: 'Королёв О.Л.', link: ''},
          {number: '2', time: "11:30-13:00", name: 'Культурология', teacher: 'Кравченко И.С.', link: ''},
          {number: '3', time: "13:20-14:50", name: 'БЖД', teacher: 'Предпопие', link: ''}
        ]
      }

    ]
  }
}
}
</script>

<style>

</style>
