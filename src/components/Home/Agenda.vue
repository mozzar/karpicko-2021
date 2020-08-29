<template>
  <div id="agenda">
    <v-container fluid>
      <component-title text="Atrakcje" />
      <component-text
        text="Damy Wam okazję do rozpoczęcia swojej przygody ze
      studiami w jak najlepszej formie. Rozmaite atrakcje, zabawa do białego
      rana – a to nie wszystko co dla Was przygotowaliśmy. Nie zdradzimy Wam na
      razie szczegółów, ale nie martwcie się, wiemy, co robimy. Będziecie
      również mieli okazję skorzystać z przydatnych dla Was na początku studiów
      szkoleń. Karpicko jeszcze nigdy nikogo nie zawiodło i mimo zmiany
      tegorocznej lokalizacji, nie zmieniamy naszego podejścia."
      />
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from "@/components/ComponentTitle";
import ComponentText from "@/components/ComponentText";
export default {
  name: "Agenda",
  components: { ComponentText, ComponentTitle }
};
</script>

<style scoped></style>
