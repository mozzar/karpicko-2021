<template>
  <div id="accommodation">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Zakwaterowanie</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="11" lg="7" md="9">
          <h2 class="headline">
            W czasie obozu nie musicie się martwić o zakwaterowanie. Każdy z Was
            będzie miał możliwość poznania życia studenckiego w akademiku, który
            znajduje się na Kampusie Warta. Co to oznacza? Blisko na szkolenia,
            blisko na imprezy, blisko do nas!
          </h2>
          <br />
          <h2 class="headline">
            Sam teren Politechniki Poznańskiej jest przyjemny dla studentów.
            Znajdują się tam grille do chillowania, tuż obok jest Galeria
            Posnania, a najlepszym czasem dla studentów w tym gorącym okresie
            jest przesiadywanie nad Wartą.
          </h2>
        </v-col>
      </v-row>
      <accommodation-gallery />
    </v-container>
  </div>
</template>

<script>
import AccommodationGallery from "@/components/Home/accommodation/AccommodationGallery";
export default {
  name: "Accommodation",
  components: { AccommodationGallery }
};
</script>

<style scoped></style>
