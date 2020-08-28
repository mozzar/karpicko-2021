<template>
  <div id="partners">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Partnerzy</h1>
        </v-col>
        <v-col class="text-center" cols="10" lg="5" md="8">
          <h2 class="headline">
            Nasi partnerzy, bez których nasz wyjazd by się nie udał!
          </h2>
        </v-col>
      </v-row>
      <v-row class="mt-10" align="start" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row class="mt-10" align="start" justify="center" no-gutters>
            <v-col
              cols="4"
              lg="2"
              md="3"
              sm="4"
              v-for="(item, index) in partnerList"
              :key="index"
            >
              <partner-card :src="item.src" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PartnerCard from "@/components/Home/partners/PartnerCard";
export default {
  name: "Partners",
  components: { PartnerCard },
  data() {
    return {
      partnerList: [
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        },
        {
          src: "question.png"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
