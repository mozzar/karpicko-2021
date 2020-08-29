<template>
  <div id="rules">
    <v-container fluid>
      <component-title text="Regulamin" />
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="10" lg="5" md="8">
          <h2 class="headline" v-for="(rule, index) in rules" :key="index">
            {{ rule }}
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from "@/components/ComponentTitle";
export default {
  name: "Rules",
  components: {ComponentTitle},
  data() {
    return {
      rules: ["Regulamin w opracowywaniu"]
    };
  }
};
</script>

<style scoped></style>
