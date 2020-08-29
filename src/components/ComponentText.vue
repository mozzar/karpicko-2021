<template>
  <v-row align="center" justify="center">
    <v-col cols="11" lg="7" md="9">
      <h2 class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline">
        {{ text }}
      </h2>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ComponentText",
  props: {
    text: String
  }
};
</script>

<style scoped></style>
