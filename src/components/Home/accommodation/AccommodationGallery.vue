<template>
  <v-row justify="center" align="center">
    <v-col v-for="(item, index) in imageList" :key="index" cols="2">
      <v-img :src="require(`@/assets/accommodation/${item.src}`)" height="170"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AccommodationGallery",
  data() {
    return {
      imageList: [
        {
          id: 0,
          src: "ds2_1.jpg"
        },
        {
          id: 1,
          src: "ds2_2.png"
        },
        {
          id: 2,
          src: "pokoj.jpg"
        },
        {
          id: 3,
          src: "kampus_1.jpg"
        },
        {
          id: 4,
          src: "kampus_2.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
