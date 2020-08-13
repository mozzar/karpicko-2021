<template>
  <div id="hero">
    <v-parallax dark src="@/assets/karpicko_2018_sm.jpg" height="700">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
<!--          <v-img src="@/assets/FUT_poznan.png" contain max-height="300"></v-img>-->
          <h2 class="display-0 font-weight-thin mb-4">
            Obóz integracyjno-szkoleniowy - Karpicko 2020
          </h2>
          <h3 class="subheading">Zapraszamy!</h3>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped>
    /*#hero {*/
    /*    filter: brightness(70%);*/
    /*}*/
</style>
