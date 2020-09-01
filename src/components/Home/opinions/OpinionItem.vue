<template>
  <v-row justify="center">
    <v-col cols="4">
      <v-img
        :src="require(`@/assets/opinions/${src}`)"
        height="400"
        min-width="250"
        max-width="250"
        id="opinion_avatar"
      />
    </v-col>
    <v-col cols="6">
      <blockquote class="blockquote text-h5 black--text" >
        {{ quote }}
      </blockquote>
      <p class="text-right align-baseline grey--text">{{ name }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "OpinionItem",
  props: {
    src: String,
    quote: String,
    name: String
  }
};
</script>

<style scoped>
#opinion_avatar {
  border-radius: 50%;
}
</style>
