<template>
  <div id="rules">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Regulamin</h1>
        </v-col>
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
export default {
  name: "Rules",
  data() {
    return {
      rules: ["1. Nie pij z Oskarem", "2. W innym przypadku powodzenia"]
    };
  }
};
</script>

<style scoped></style>
