<template>
    <v-container fluid fill-height class="home-hero" style="max-height:100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black black--text text-xs-center">Хуя у меня два</div>
            <div class="display-4 font-weight-black black--text text-xs-center mb-3">и</div>
            <div class="display-1 font-weight-bold black--text text-xs-center"> меча два.</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://fbcd.co/images/products/dbf9baed1cf869fde664a1e75bad2db5_resize.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
