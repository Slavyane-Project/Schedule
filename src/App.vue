<template>
  <v-app class="">
    <v-content class="home-hero">
      <Navbar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.home-hero {
  background: url('assets/background_paper.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover
}
</style>
<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=swap");

#app {
  font-family: 'Rubik'
}
</style>
