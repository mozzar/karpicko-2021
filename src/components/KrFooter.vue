<template>
  <v-footer dark padless>
    <v-card flat tile class="primary white--text text-center" width="100%">
      <v-card-text class="mt-n1 mb-n7">
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="icon.url"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.fa }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-6">
        Niniejszy serwis znajduje się na serwerze Politechniki Poznańskiej. Za
        jego treść odpowiedzialny jest Samorząd Studentów Politechniki
        Poznańskiej.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;{{ new Date().getFullYear() }} —
        <strong>Samorząd Studentów Politechniki Poznańskiej</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "KrFooter",
  data: () => ({
    icons: [
      {
        fa: "fab fa-facebook",
        url: "https://www.facebook.com/SamorzadStudentowPolitechnikiPoznanskiej"
      },
      {
        fa: "fab fa-instagram",
        url: "https://www.instagram.com/samorzadpp/"
      },
      {
        fa: "fas fa-envelope",
        url: "mailto:samorzad@samorzad.put.poznan.pl."
      }
    ]
  })
};
</script>

<style scoped></style>
