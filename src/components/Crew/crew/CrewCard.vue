<template>
  <v-card class="elevation-0 transparent">
    <v-card-text class="text-xs-center">
      <v-avatar size="150">
        <img v-if="avatar" :src="require(`@/assets/crew/${avatar}`)"/>
        <img v-else :src="require(`@/assets/other/question.png`)"/>
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
    faculty: String,
    avatar: String
  }
};
</script>

<style scoped></style>
