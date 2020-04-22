<template>
  <v-container fluid fill-height class="home-hero" style="max-height:100vh;">
    <v-row pa-5 justify-lg="start" justify-xl="start" justify-md="start" justify-xs="center" justify-sm="center" color="indigo--text">
      <v-col cols="12" md="6" lg="7" xl="7">

        <!-- md lg xl -->

        <v-card
          flat
          class="cardStyle hidden-sm-and-down"
          :class="{card_md: $vuetify.breakpoint.md}"
        >
          <v-row class="justify-center">
            <v-img
              src="https://imgur.com/y14cs7l.png"
              class="first"
              :class="{schedule_img_md: $vuetify.breakpoint.md, schedule_img_xl: $vuetify.breakpoint.xl, schedule_img_lg: $vuetify.breakpoint.lg,}"
            ></v-img>
          </v-row>
          <v-card-text class="display-2 text-xs-center homeTextBig black--text second">Приветствуем.</v-card-text>
          <v-card-text
            class="display-2 text-xs-center homeTextBig black--text third"
          >Вы находитесь на сайте расписания ИЭиУ.</v-card-text>
          <br />
          <v-card-text
            class="display-1 font-weight-bold text-xs-center homeTextBig black--text fourth"
          >Выберите ваш курс в меню</v-card-text>
        </v-card>

        <!-- xs -->

        <v-card flat class="cardStyle cardStyleXs hidden-sm-and-up mx-auto">
          <v-card-text
                  class="homeTextSmall text-xs-center black--text second"
                  :class="{card_text_xs1: $vuetify.breakpoint.xs}"
                  bold
          >Приветствуем.
          </v-card-text>
          <v-card-text
                  class="homeTextSmall text-xs-center black--text third"
                  :class="{card_text_xs2: $vuetify.breakpoint.xs}"
          >Вы находитесь на сайте расписания ИЭиУ.
          </v-card-text>
          <v-card-text
            class="font-weight-bold homeTextSmall text-xs-center black--text fourth"
            :class="{card_text_xs3: $vuetify.breakpoint.xs}"
          >Выберите ваш курс в меню</v-card-text>
        </v-card>

        <!-- sm -->

          <v-card flat class="cardStyle hidden-xs-only hidden-md-and-up mx-auto">
            <v-card-text
              class="homeTextSmall text-xs-center black--text second"
              :class="{card_text_sm1: $vuetify.breakpoint.sm}"
            >Приветствуем.</v-card-text>
            <v-card-text
              class="homeTextSmall text-xs-center black--text third"
              :class="{card_text_sm2: $vuetify.breakpoint.sm}"
            >
              Вы находитесь на сайте
              расписания ИЭиУ.
            </v-card-text>
            <v-card-text
              class="font-weight-bold homeTextSmall text-xs-center black--text fourth"
              :class="{card_text_sm3: $vuetify.breakpoint.sm}"
            >
              Выберите ваш
              курс в меню
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
      <v-img
        src="https://i.imgur.com/grk3TnF.png"
        :class="{image_xs: $vuetify.breakpoint.xs, image_sm: $vuetify.breakpoint.sm, image_md: $vuetify.breakpoint.md, image_lg: $vuetify.breakpoint.lg, image_xl: $vuetify.breakpoint.xl}"
      />
  </v-container>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Home",
  data () {
    return {
      alignment: 'center',
    }
  },
  mounted() {
    let home = gsap.timeline();
    home.from(".first", {
      y: 50,
      duration: 1,
      opacity: 0,
      ease: "power3.inOut"
    });
    home.to(".first", { y: 20, duration: 1, opacity: 1, ease: "power3.inOut" });
    home.from(
      ".second",
      { y: 35, duration: 0.5, opacity: 0, ease: "power3.inOut" },
      "<.1"
    );
    home.from(
      ".third",
      { y: 35, duration: 0.5, opacity: 0, ease: "power3.inOut" },
      "<.1"
    );
    home.from(
      ".fourth",
      { y: 35, duration: 0.5, opacity: 0, ease: "power3.inOut" },
      "<.1"
    );
  }
};
</script>

<style scoped>
.mobile {
  height: auto;
}
.home-hero {
  background: url(https://i.imgur.com/69kDUgb.png);
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
  background-color: transparent !important;
  border-color: transparent !important;
  word-wrap: normal;
}

.cardStyleXs {
  margin-top: -140px;
  position: fixed;
}

.card_text_xs1 {
  font-size: 1.8rem;
}
.card_text_xs2 {
  font-size: 1.6rem;
}
.card_text_xs3 {
  font-size: 1.5rem;
}

.card_text_sm1 {
  font-size: 2rem;
}
.card_text_sm2 {
  font-size: 1.9rem;
}
.card_text_sm3 {
  font-size: 2rem;
}

.image_xs {
  margin-top: 250px;
  position: fixed;
}
.image_sm {
  margin-top: 290px;
  margin-left: 350px;
  position: fixed;
}
.image_md {
  display: none;
}
.image_lg {
  display: none;
}
.image_xl {
  display: none;
}

.first {
  height: auto;
}

.second {
  height: auto;
}

.third {
  height: auto;
}

.fourth {
  height: auto;
}
.schedule_img_md {
  max-width: 500px;
}
.schedule_img_lg {
  max-width: 650px;
}
.schedule_img_xl {
  max-width: 700px;
}
.card_md {
  margin-left: 70px;
}
</style>
