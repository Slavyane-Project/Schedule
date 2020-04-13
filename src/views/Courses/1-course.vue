<template>
  <div>
    <h1 class="display-2 font-weight-regular">Выберите ваше направление подготовки:</h1>
    <v-container class="my-5">
      
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="faculty of faculties" :key="faculty.name">
          <v-card shaped flat elevation="3" class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <v-icon x-large>{{ faculty.icon }}</v-icon>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="title black--text">{{ faculty.name }}</div>
            </v-card-text>
              <v-menu transition="scale-transition">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" class="mb-5" rounded>
                    <span>Выберите группу</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="''" v-for="gr of faculty.groups" :key="gr.group" router :to="gr.url">
                    <v-list-item-title class="text-center list">
                      {{ gr.group }}
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
        { name: 'Бизнес-информатика', icon:'mdi-laptop',
          groups: [
            { group: 'БИ-б-о-191', url: '/course_1/bi_191'}
        ]
        },
        { name: 'Торговое дело', icon: 'mdi-cash-register',
          groups: [
            { group: 'ТД-б-о-191', url: '/course_1/td_191'},
          ],
        }, 
        { name: 'Экономика', icon: 'mdi-finance',
          groups: [
            { group: 'Э-б-о-191', url: '/course_1/e_191'},
            { group: 'Э-б-о-192', url: '/course_1/e_192'},
            { group: 'Э-б-о-193', url: '/course_1/e_193'},
            { group: 'Э-б-о-194', url: '/course_1/e_194'},
          ]  
        },
        { name: 'Гос. муниципальное управление', icon: 'mdi-account-tie', 
          groups: [
            { group: 'ГМУ-б-о-191', url: '/course_1/gu_191'},
            { group: 'ГМУ-б-о-192', url: '/course_1/gu_192'},
          ]
        },
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
.item {
  text-align: center;
}
.list {
  border-radius: 10px;
}
</style>
