<template>
  <div id="contact">
    <v-container>
      <component-title text="Kontakt" />
      <component-text class="mt-8" text="Aby się skontaktować użyj poniższego formularza" />
      <v-row align="center" justify="center">
        <v-col cols="11" lg="7" md="9">
          <v-btn href="https://forms.gle/3wwxvp7uWQGncXyf7" target="_blank" x-large outlined rounded class="text-button" color="primary">
            Skontaktuj się
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentText from "@/components/ComponentText";
import ComponentTitle from "@/components/ComponentTitle";
export default {
  name: "Contact",
  components: {ComponentTitle, ComponentText }
};
</script>

<style scoped></style>
