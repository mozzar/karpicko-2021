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
      <v-img :src="require(`@/assets/agenda/${item.src}`)" height="170">
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
        <v-img :src="require(`@/assets/agenda/${dialogSrc}`)" />
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AgendaGallery",
  data() {
    return {
      dialog: false,
      dialogSrc: "agenda_01.jpg",
      imageIndex: 0,
      orderedImageList: [],
      imageList: [
        {
          id: 0,
          src: "agenda_01.jpg"
        },
        {
          id: 1,
          src: "agenda_02.jpg"
        },
        {
          id: 2,
          src: "agenda_04.jpg"
        },
        {
          id: 3,
          src: "agenda_05.jpg"
        },
        {
          id: 4,
          src: "agenda_06.jpg"
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
