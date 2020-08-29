<template>
  <div id="info" class="mt-4">
    <v-container fluid>
      <component-text
        text="Obóz Integracyjno-Szkoleniowy “Karpicko” - adapciak dla przyszłych
            studentów Politechniki Poznańskiej, który w najlepszy sposób
            przygotowywuje Was wejście w studia. 5 dni szkoleń, warsztatów,
            imprez integracyjnych i wielu innych atrakcji. Wszystko organizowane
            przez Samorząd Studentów Politechniki Poznańskiej."
      />
      <component-text text="Kiedy? Od 21 do 25 września 2020r." />
    </v-container>
  </div>
</template>

<script>
import ComponentText from "@/components/ComponentText";
export default {
  name: "Info",
  components: { ComponentText }
};
</script>

<style scoped></style>
