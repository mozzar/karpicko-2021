<template>
  <v-col cols="10" lg="3" md="4">
    <v-card class="elevation-0 transparent">
      <!--      <v-card-text class="text-xs-center">-->
      <!--        <v-img :src="require(`@/assets/${avatar}`)" height="80" contain></v-img>-->
      <!--      </v-card-text>-->
      <v-card-text class="text-xs-center">
        <v-avatar size="300">
          <img src="@/assets/daniel_mokrzan.jpg" />
        </v-avatar>
      </v-card-text>
      <v-card-title primary-title class="layout justify-center font-weight-bold">
        <div class="headline text-xs-center">{{ title }}</div>
      </v-card-title>
      <v-card-text>
        <p class="mt-n4">{{ text.email }}</p>
        <p class="mt-n4">{{ text.phone }}</p>
        <p class="mt-n4">{{ text.faculty }}</p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CoordinatorCard",
  props: {
    title: String,
    text: String,
    avatar: String
  }
};
</script>

<style scoped></style>
