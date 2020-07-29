<template>
  <v-footer dark padless>
    <link
      href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      rel="stylesheet"
    />
    <v-card flat tile class="primary white--text text-center" width="100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-6">
        Niniejszy serwis znajduje się na serwerze Politechniki Poznańskiej. Za
        jego treść odpowiedzialny jest Samorząd Studentów Politechniki
        Poznańskiej. Kontakt do administratora podany jest w zakładce Kontakt.
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
    icons: ["fab fa-facebook", "fab fa-instagram"]
  })
};
</script>

<style scoped></style>
