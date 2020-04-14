<template>
  <v-container fluid fill-height class="home-hero" style="max-height:100vh;">
    <v-row justify-center pa-5 color="indigo--text text--center">
      <v-col cols="12" sm="6" md="6" lg="7" xl="7">
        <v-card flat class="cardStyle hidden-sm-and-down">
          <v-card-text class="display-3 text-xs-center homeTextBig black--text">Приветствуем.</v-card-text>
          <v-card-text class="display-3 text-xs-center homeTextBig black--text">Вы находитесь на сайте расписания ИЭиУ.</v-card-text>
          <br>
          <v-card-text class="display-2 font-weight-bold text-xs-center homeTextBig black--text" >Выберите ваш курс в меню</v-card-text>
        </v-card>
        <v-card flat class="cardStyle hidden-md-and-up">
          <v-card-text class="headline homeTextSmall text-xs-center  black--text">Приветствуем.</v-card-text>
          <v-card-text class="headline homeTextSmall text-xs-center  black--text">Вы находитесь на сайте расписания ИЭиУ.</v-card-text>
          <v-card-text class="title font-weight-bold homeTextSmall text-xs-center  black--text" >Выберите ваш курс в меню</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

export default {
  name: "Home",
}

</script>

<style scoped>
  .home-hero {
    background: url("https://i.imgur.com/SMWSC5F.png");
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
</style>
