<template>
  <v-col cols="10" lg="3" md="4">
    <v-card class="elevation-0 transparent">
      <v-card-text class="text-xs-center">
        <v-img
          :src="require(`@/assets/invitation/${icon}`)"
          height="80"
          contain
        ></v-img>
      </v-card-text>
      <v-card-title primary-title class="justify-center ">
        <h2 class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline text-no-wrap">
          {{ title }}
        </h2>
      </v-card-title>
      <v-card-text
        class="text-sm-subtitle-1 text-md-subtitle-1 text-lg-subtitle-1 text-xl-subtitle-1 text-body-2"
        >{{ text }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "InvitationCard",
  props: {
    title: String,
    text: String,
    icon: String
  }
};
</script>

<style scoped></style>
