<template>
  <div id="partners">
    <v-container fluid>
      <component-title text="Partnerzy" />
      <component-text
        text="Nasi partnerzy, bez których nasz wyjazd by się nie udał!"
      />
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
import ComponentTitle from "@/components/ComponentTitle";
import ComponentText from "@/components/ComponentText";
export default {
  name: "Partners",
  components: { ComponentText, ComponentTitle, PartnerCard },
  data() {
    return {
      partnerList: [
        {
          src: "pils.png"
        },
        {
          src: "fortuna.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
