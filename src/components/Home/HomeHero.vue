<template>
  <div id="hero">
    <v-parallax dark src="@/assets/karpicko_2018_sm.jpg" height="700">
      <v-row align="center" justify="center">
        <v-img
          src="@/assets/other/Karpicko_White.png"
          class="hidden-xs-only"
          max-width="500"
        />
        <v-img
          src="@/assets/other/Karpicko_White.png"
          class="hidden-sm-and-up"
          max-width="330"
        />
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped></style>
