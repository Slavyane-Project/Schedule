<template>
  <nav>
    <v-app-bar fixed app dense elevate-on-scroll color="white" elevation='3'>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link
          to = "/"
          class = "pointer"
          @click="''"
        >
      <img src="@/assets/logo2.png" height="40" class="mr-6 mt-2">
      </router-link>
      <v-toolbar-title dark class="ml-n6 hidden-sm-and-down font-weight-regular">
         <router-link
          to = "/"
          tag = "span"
          class = "pointer"
          @click="''"
        >
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ml-5 hidden-sm-and-down" color="deep-orange darken-1" elevation='2' rounded outlined v-for="course of courses" :key="course.title" :to="course.url" >
        {{ course.title }}
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer fixed app v-model="drawer" temporary color="deep-orange lighten-5">
      <v-list>
        <v-row class="justify-center">
        <v-img max-height="70" class="mb-3 first" max-width="190" src="https://imgur.com/4InY1Uq.png"></v-img>
        </v-row>
        <v-divider></v-divider>
        <v-list-item-group dense color="deep-orange darken-1">
          <template>
            <v-list-item v-for="course of courses" :key="course.title" router :to="course.url" class="">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold title">
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
import gsap from 'gsap'

export default {
  data () {
    return {
      drawer: false,
      courses: [
        {
          title: '1 курс', url: '/course_1', icon: 'mdi-numeric-1-circle'
        },
        {
          title: '2 курс', url: '/course_2', icon: 'mdi-numeric-2-circle'
        },
        {
          title: '3 курс', url: '/course_3', icon: 'mdi-numeric-3-circle'
        },
        {
          title: '4 курс', url: '/course_4', icon: 'mdi-numeric-4-circle'
        },
        {
          title: '1 курс магистратуры', url: '/course_5', icon: 'mdi-numeric-1-circle'
        },
      ]
    }
  },
  name: "drawerIcon",
  mounted() {
    let drawerIcon = gsap.timeline()
    drawerIcon.from('.first', { x: 20, duration: 1, opacity: 0, ease: 'power3.inOut'},)
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
