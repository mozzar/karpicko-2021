<template>
  <v-row align="center" justify="center">
    <v-col class="text-center" cols="12">
      <h1
        class="text-md-h3 text-lg-h3 text-xl-h3 text-sm-h3 text-h4 font-weight-bold text-uppercase mt-7 "
      >
        {{ text }}
      </h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ComponentTitle",
  props: {
    text: String
  }
};
</script>

<style scoped></style>
