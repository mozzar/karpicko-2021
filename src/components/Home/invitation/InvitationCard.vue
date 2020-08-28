<template>
  <v-col cols="10" lg="3" md="4">
    <v-card class="elevation-0 transparent">
      <v-card-text class="text-xs-center">
        <v-img :src="require(`@/assets/invitation/${icon}`)" height="80" contain></v-img>
      </v-card-text>
      <v-card-title primary-title class="layout justify-center">
        <div class="headline text-xs-center">{{ title }}</div>
      </v-card-title>
      <v-card-text class="subtitle-1">{{ text }} </v-card-text>
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
}
</script>

<style scoped>

</style>