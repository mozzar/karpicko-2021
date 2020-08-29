<template>
  <div id="accommodation">
    <v-container fluid>
      <component-title text="Zakwaterowanie" />
      <component-text
        text="W czasie obozu nie musicie się martwić o zakwaterowanie. Każdy z Was
            będzie miał możliwość poznania życia studenckiego w akademiku, który
            znajduje się na Kampusie Warta. Co to oznacza? Blisko na szkolenia,
            blisko na imprezy, blisko do nas!"
      />
      <component-text
        text="Sam teren Politechniki Poznańskiej jest przyjemny dla studentów.
            Znajdują się tam grille do chillowania, tuż obok jest Galeria
            Posnania, a najlepszym czasem dla studentów w tym gorącym okresie
            jest przesiadywanie nad Wartą."
      />
      <accommodation-gallery />
    </v-container>
  </div>
</template>

<script>
import AccommodationGallery from "@/components/Home/accommodation/AccommodationGallery";
import ComponentTitle from "@/components/ComponentTitle";
import ComponentText from "@/components/ComponentText";
export default {
  name: "Accommodation",
  components: { ComponentText, ComponentTitle, AccommodationGallery }
};
</script>

<style scoped></style>
