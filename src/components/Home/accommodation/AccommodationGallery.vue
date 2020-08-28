<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="(item, index) in imageList"
      :key="index"
      cols="6"
      lg="2"
      md="4"
      sm="4"
    >
      <v-img :src="require(`@/assets/accommodation/${item.src}`)" height="170">
        <v-btn
          height="170"
          width="100%"
          v-model="imageIndex"
          :value="item.id"
          :id="item.id"
          text
          @click="clickMe"
        ></v-btn>
      </v-img>

      <v-dialog
        v-model="dialog"
        max-width="1000"
        @click:outside="
          closeMe;
          dialog = false;
        "
      >
        <v-img
          :src="require(`@/assets/accommodation/${dialogSrc}`)"
        />
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AccommodationGallery",
  data() {
    return {
      todo: "buttony, każdy otwiera carousel inaczej",
      dialog: false,
      dialogSrc: "ds2_2.png",
      imageIndex: 0,
      orderedImageList: [],
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
  },
  methods: {
    clickMe(e) {
      this.dialogSrc = this.imageList[e.currentTarget.value].src;
      this.dialog = true;
    }
  }
};
</script>

<style scoped></style>
