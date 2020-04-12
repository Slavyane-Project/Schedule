<template>
  <v-container fluid fill-height class="home-hero" style="max-height:100vh;">
    <v-row justify-center pa-5 color="indigo--text text--center">
      <v-col xs="12" lg="7">
        <div class="display-4 font-weight-bold text-xs-center homeText">Хуя у меня два</div>
        <div class="display-4 font-weight-bold text-xs-center mb-3 text--center homeText">и</div>
        <div class="display-1 font-weight-bold text-xs-center homeText">меча два.</div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "Home"
};
</script>

<style scoped>
  .home-hero {
    background: url("https://fbcd.co/images/products/dbf9baed1cf869fde664a1e75bad2db5_resize.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .homeText {
    text-align: center;
  }
</style>
