<template>
  <v-card class="elevation-0 transparent">
    <!--      <v-card-text class="text-xs-center">-->
    <!--        <v-img :src="require(`@/assets/${avatar}`)" height="80" contain></v-img>-->
    <!--      </v-card-text>-->
    <v-card-text class="text-xs-center">
      <v-avatar size="150">
        <img src="@/assets/daniel_mokrzan.jpg" />
      </v-avatar>
    </v-card-text>
    <v-card-title primary-title class="layout justify-center body-2 font-weight-bold">
      {{ name }}
    </v-card-title>
    <v-card-text class="mt-n4">{{ faculty }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CrewCard",
  props: {
    name: String,
    faculty: String
  }
};
</script>

<style scoped></style>
