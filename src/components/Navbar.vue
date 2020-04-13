<template>
  <nav>
    <v-app-bar dense elevate-on-scroll color="white" elevation='3'>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link
          to = "/"
          class = "pointer"
          @click="''"
        >
      <img src="@/assets/title-image.png" height="40" class="mr-6 mt-2">
      </router-link>
      <v-toolbar-title dark class="ml-n6 hidden-sm-and-down font-weight-light">
         <router-link
          to = "/"
          tag = "span"
          class = "pointer"
          @click="''"
        >
        Расписание</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ml-3 hidden-sm-and-down" elevation='2' rounded outlined v-for="course of courses" :key="course.title" :to="course.url" >
        {{ course.title }}
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item-group color="indigo lighten-2">
          <template>
            <v-list-item v-for="course of courses" :key="course.title" router :to="course.url" class="">
              <v-list-item-content>
                <v-list-item-title class="">
                  {{course.title}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      courses: [
        {
          title: '1 курс', url: '/course_1'
        },
        {
          title: '2 курс', url: '/course_2'
        },
        {
          title: '3 курс', url: '/course_3'
        },
        {
          title: '4 курс', url: '/course_4'
        },
        {
          title: '1 курс Магистратуры', url: '/course_5'
        },
        {
          title: '2 курс Магистратуры', url: '/course_6'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
  .images {
    height: 3%;
    width: 13%;
    margin-top: 3px;

  }
</style>
