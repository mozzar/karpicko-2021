<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" sm="4" >
        <v-img
          :src="require(`@/assets/opinions/${src}`)"
          height="400"
          max-width="250"
          min-width="250"
          id="opinion_avatar_sm"
          class="hidden-xs-only"
        />
        <v-img
          :src="require(`@/assets/opinions/${src}`)"
          height="300"
          max-width="188"
          min-width="188"
          id="opinion_avatar_xs"
          class="hidden-sm-only"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <blockquote class="blockquote black--text text-center text-subtitle-1 headline">
          {{ quote }}
        </blockquote>
        <p class="text-right align-baseline grey--text">{{ name }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "OpinionItemSmAndDown",
  props: {
    src: String,
    quote: String,
    name: String
  }
};
</script>

<style scoped>
#opinion_avatar_sm {
  border-radius: 50%;
}
#opinion_avatar_xs {
  border-radius: 50%;
}
</style>
