<template>
  <div id="rules">
    <v-container fluid>
      <component-title text="Regulamin" />
      <v-row align="center" justify="center">
        <v-btn
          download
          href="@/assets/rules/Regulamin-Karpicko-2020.pdf"
          outlined
          rounded
          color="primary"
          x-large
          class="mt-10"
        >
          Regulamin
        </v-btn>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
          download
          href="@/assets/rules/Zasady_bezpieczeństwa.pdf"
          outlined
          rounded
          color="primary"
          x-large
          class="mt-4"
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
  data() {
    return {
      rules: ["Regulamin w opracowywaniu"]
    };
  },
  methods: {
    readFile() {
      window.open("@/assets/rules/Regulamin-Karpicko-2020.pdf", "_blank"); //to open in new tab
    }
    // handleClick: () => {
    //   window.open(
    //     require("@/assets/rules/Regulamin-Karpicko-2020.pdf"),
    //     "_blank"
    //   );
    // }
  }
};
</script>

<style scoped></style>
