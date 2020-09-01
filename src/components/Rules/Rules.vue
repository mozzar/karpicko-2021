<template>
  <div id="rules">
    <v-container fluid>
      <component-title text="Regulamin" />
      <v-row align="center" justify="center">
        <v-btn
          href="/rules/Regulamin-Karpicko-2020.pdf"
          download
          outlined
          rounded
          color="primary"
          x-large
          class="mt-8 text-button"
        >
          Regulamin
        </v-btn>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
          download
          href="/rules/Zasady_bezpieczeństwa.pdf"
          outlined
          rounded
          color="primary"
          x-large
          class="mt-4 text-button"
        >
          Zasady bezpieczeństwa
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from "@/components/ComponentTitle";
export default {
  name: "Rules",
  components: { ComponentTitle },
};
</script>

<style scoped></style>
