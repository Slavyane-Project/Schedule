<template>
  <div>
    <h1 class="display-2 font-weight-regular">Выберите ваше направление подготовки</h1>
    <v-container class=" my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="faculty of faculties" :key="faculty.name">
          <v-card shaped flat elevation="3" class="text-center ma-3 cardStyle">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <v-icon x-large>{{ faculty.icon }}</v-icon>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="title black--text">{{ faculty.name }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-menu transition="scale-transition">
                <template v-slot:activator="{ on }">
                  <div class="text-center">
                    <v-btn v-on="on" rounded class="mb-3">
                      <span>Выберите группу</span>
                    </v-btn>
                  </div>
                </template>
                <v-list>
                  <v-list-item @click="''" v-for="gr of faculty.groups" :key="gr.group" router :to="gr.url">
                    <v-list-item-title class="text-center list">
                      {{ gr.group }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    faculties: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
}
</script>

<style>
h1 {
  text-align: center;
  font-family: Calibri;
  margin-top: 2%
}
.item {
  text-align: center;
}
/* .margin{
  margin-left
} */

</style>
