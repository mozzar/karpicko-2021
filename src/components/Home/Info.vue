<template>
  <div id="info" class="mt-4">
    <v-container fluid>
      <component-text
        text="Obóz Integracyjno-Szkoleniowy “Karpicko” to adapciak dla przyszłych
        studentów Politechniki Poznańskiej, który w najlepszy sposób przygotuje
        Was do wejście w nowy etap życia - studia. To przede wszystkim pięć dni
        szkoleń, warsztatów, a także zajęć i imprez integracyjnych oraz wielu
        innych atrakcji. Wszystko zorganizowane dla studentów od studentów -
        czyli przez Samorząd Studentów Politechniki Poznańskiej."
      />
      <component-text text="Kiedy? Od 21 do 25 września 2020r." />
      <component-text
        text="Gdzie? Na Kampusie Warta Politechniki Poznańskiej"
        class="mt-n6"
      />
      <component-text
        text="Z kim? Z Samorządem i nowymi znajomymi z Uczelni"
        class="mt-n6"
      />
      <component-text
        text="Dlaczego? Żeby w najlepszy sposób rozpocząć studia!"
        class="mt-n6"
      />
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
