<template>
  <div>
    <h1 class="font-weight-regular">Выберите ваше направление подготовки</h1>
    <v-container class="my-5">
      
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="faculty of faculties" :key="faculty.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="faculty.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle1">{{ faculty.name }}</div>
              <div class="grey--text">{{ faculty.role }}</div>
            </v-card-text>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">
                    <span>Выберите группу</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title @click="''" >
                        <div v-for="gr of faculty.groups" :key="gr.group">
                          {{ gr.group }}
                        </div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
      faculties: [
        { name: 'Бизнес-информатика', avatar: '/avatar-1.png',
          groups: [
            { group: 'БИ-181'}
        ]
        },
        { name: 'Торговое дело', avatar: '/avatar-2.png',
          groups: [
            { group: 'ТД-181'},
            { group: 'ТД-182'}
          ],

        }, 
        { name: 'Экономика', avatar: '/avatar-3.png',},
        { name: 'Менеджмент', avatar: '/avatar-4.png', },
        { name: 'Гос. муниципальное управление', avatar: '/avatar-5.png', },
        { name: 'Управление персоналом', avatar: '/avatar-5.png', },
        { name: 'Финансы и кредит', avatar: '/avatar-5.png', }
      ],
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: Calibri;
  margin-top: 2%
} 
</style>
