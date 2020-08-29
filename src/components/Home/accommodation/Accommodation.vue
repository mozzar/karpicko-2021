<template>
  <div id="accommodation">
    <v-container fluid>
      <component-title text="Zakwaterowanie" />
      <component-text
        text="W czasie obozu nie musicie się oczywiście martwić o zakwaterowanie.
        Każdy z Was będzie miał możliwość poznania życia studenckiego w
        najbardziej studenckim budynku na Uczelni - akademiku, który znajduje
        się na Kampusie Warta. Co to oznacza? Blisko na szkolenia,
        blisko na imprezy, blisko do nas! "
      />
      <component-text
        text="Sam teren Politechniki Poznańskiej jest korzystny dla jego
        użytkowników. Lokalizacja jest bardzo dobra, infrastruktura ciągle
        dopasowywana do potrzeb studentów, a teren dostatecznie duży, żeby
        każdy znalazł swoje ulubione miejsce. Dla tych, którzy kochają
        naturę znajdą się miejsca na rozłożenie kocyka na trawie. Natomiast
        Ci co cenią sobie wygodne miejsce do integracji ze znajomymi,
        odnajdą się w kultowych już strefach grillowania."
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
