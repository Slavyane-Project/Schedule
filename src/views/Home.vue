<template>
  <v-container fluid fill-height class="home-hero" style="max-height:100vh;">
    <v-row justify-center pa-5 color="indigo--text text--center">
      <v-col cols="12" sm="6" md="6" lg="7" xl="7">
        <v-card flat class="cardStyle hidden-sm-and-down">
          <v-row class="justify-center">
          <v-img max-width="650" src="https://imgur.com/y14cs7l.png" class="first"></v-img>
          </v-row>
          <v-card-text class="display-2 text-xs-center homeTextBig black--text second">Приветствуем.</v-card-text>
          <v-card-text class="display-2 text-xs-center homeTextBig black--text third">Вы находитесь на сайте расписания ИЭиУ.</v-card-text>
          <br>
          <v-card-text class="display-1 font-weight-bold text-xs-center homeTextBig black--text fourth" >Выберите ваш курс в меню</v-card-text>
        </v-card>
        <v-card flat class="cardStyle hidden-md-and-up">
          <v-card-text class="headline homeTextSmall text-xs-center  black--text second" bold>Приветствуем.</v-card-text>
          <v-card-text class="headline homeTextSmall text-xs-center  black--text third">Вы находитесь на сайте расписания ИЭиУ.</v-card-text>
          <v-card-text class="title font-weight-bold homeTextSmall text-xs-center  black--text fourth" >Выберите ваш курс в меню</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gsap from 'gsap'

export default {
  name: "Home",
  mounted() {
    let home = gsap.timeline()
    home.from('.first', { y: 50, duration: 0.01, opacity: 0, ease: 'power3.inOut' },)
    home.to('.first', {y:20, duration:1, opacity:1, ease:'power3.inOut'},)
    home.from('.second', { y: 35, duration: 0.5, opacity: 0, ease: 'power3.inOut' }, '<.1')
    home.from('.third', { y: 35, duration: 0.5, opacity: 0, ease: 'power3.inOut' }, '<.1')
    home.from('.fourth', { y: 35, duration: 0.5,  opacity: 0, ease: 'power3.inOut' }, '<.1')
  }
}
</script>

<style scoped>
  .home-hero {
    background: url(../assets/background.png);
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .homeTextBig {
    text-align: center;
  }
  .homeTextSmall {
    text-align: center;
  }
  .cardStyle {
  background-color: transparent!important;
  border-color: transparent!important;
  word-wrap: normal;
 }
 .first {
   height: auto
 }
 .second {
  height: auto
 }
 .third {
   height: auto
 }
 .fourth {
   height: auto
 }
</style>
