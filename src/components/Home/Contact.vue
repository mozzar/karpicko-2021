<template>
  <div id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Kontakt</h1>
        </v-col>
      </v-row>

      <v-row class="mt-10" align="start" justify="center">
        <coordinator-card
          :title="daniel.title"
          :text="daniel.text"
          :avatar="daniel.avatar"
        />
        <coordinator-card
          :title="oskar.title"
          :text="oskar.text"
          :avatar="oskar.avatar"
        />
      </v-row>

      <v-btn rounded outlined large href="#/crew" color="primary" class="font-weight-bold mb-4">
        Poznaj resztę kadry
        <v-icon right>fas fa-long-arrow-alt-right</v-icon>
      </v-btn>

    </v-container>
  </div>
</template>

<script>
import CoordinatorCard from "./CoordinatorCard";
export default {
  name: "Contact",
  components: { CoordinatorCard },
  data() {
    return {
      daniel: {
        title: "Daniel Mokrzan",
        text: {
          email: "daniel123@somemail.com",
          phone: "+48 213 769 666",
          faculty: "WILiT"
        },
        avatar: "Daniel_M.jpg"
      },
      oskar: {
        title: "Oskar Napierała",
        text: {
          email: "oskar123@somemail.com",
          phone: "+48 213 769 666",
          faculty: "WIM"
        },
        avatar: "Oskar.jpg"
      }
    };
  }
};
</script>

<style scoped></style>
