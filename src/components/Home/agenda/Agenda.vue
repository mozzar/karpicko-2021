<template>
  <div id="agenda">
    <v-container fluid>
      <component-title text="Atrakcje" />
      <component-text
        text="Damy Wam okazję do rozpoczęcia swojej przygody ze studiami w
        najlepszej możliwej formie. Rozmaite atrakcje i aktywności,
        niezapomniane przeżycia oraz przede wszystkim zabawa do białego rana
        – a to nie wszystko co dla Was przygotowaliśmy. Nie zdradzimy Wam na
        razie szczegółów, ale nie martwcie się, organizujemy obóz już od
        wielu lat, więc wiemy co robimy.  Będziecie również mieli okazję
        skorzystać ze szkoleń, które okażą się bardzo przydatne na początku
        studiów. Karpicko zawsze organizowane jest na najwyższym poziomie, a my
        mimo zmiany tegorocznej lokalizacji, nie zmieniamy naszego podejścia!"
      />
      <agenda-gallery />
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from "@/components/ComponentTitle";
import ComponentText from "@/components/ComponentText";
import AgendaGallery from "@/components/Home/agenda/AgendaGallery";
export default {
  name: "Agenda",
  components: {AgendaGallery, ComponentText, ComponentTitle }
};
</script>

<style scoped></style>
