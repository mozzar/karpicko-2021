<template>
  <div id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Koordynatorzy</h1>
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
      <v-row class="mt-10" align="start" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row class="mt-10" align="start" justify="center" no-gutters>
            <v-col
              cols="6"
              lg="2"
              md="3"
              sm="4"
              v-for="(item, index) in crew"
              :key="index"
            >
              <crew-card :name="item.name" :faculty="item.faculty" :avatar="item.avatar" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CoordinatorCard from "./CoordinatorCard";
import CrewCard from "./CrewCard";
export default {
  name: "Contact",
  components: { CrewCard, CoordinatorCard },
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
      },
      crew: [
        {
          name: "Szymon Bujanowski",
          faculty: "WARiE",
          avatar: "Szymon.jpg"
        },
        {
          name: "Wojciech Charoński",
          faculty: "WARiE",
          avatar: "Wojtek_Ch.jpg"
        },
        {
          name: "Bartosz Cieślewicz",
          faculty: "WIiT",
          avatar: ""
        },
        {
          name: "Natalia Fedko",
          faculty: "WA",
          avatar: "Natalka.jpg"
        },
        {
          name: "Wojciech Gindera",
          faculty: "WIŚiE",
          avatar: ""
        },
        {
          name: "Patryk Ginter",
          faculty: "WIMiFT",
          avatar: ""
        },
        {
          name: "Marta Kocurek",
          faculty: "WTCh",
          avatar: ""
        },
        {
          name: "Bartosz Kruczyński",
          faculty: "WILiT",
          avatar: "Bartek_K1.jpg"
        },
        {
          name: "Klaudia Kulińska",
          faculty: "WIM",
          avatar: "Klaudia_K.jpg"
        },
        {
          name: "Eliza Kurkowiak",
          faculty: "WIM",
          avatar: "Eliza.jpg"
        },
        {
          name: "Martyna Kurz",
          faculty: "WIiT",
          avatar: ""
        },
        {
          name: "Dagmara Maćkowiak",
          faculty: "WIZ",
          avatar: "Dagmara.jpg"
        },
        {
          name: "Marek Mocny",
          faculty: "WILiT",
          avatar: "Marek.jpg"
        },
        {
          name: "Marta Orlikowska",
          faculty: "WIŚiE",
          avatar: "Marta_O.jpg"
        },
        {
          name: "Mateusz Ostrowski",
          faculty: "WIiT",
          avatar: "Mateusz.jpg"
        },
        {
          name: "Grzegorz Otworowski",
          faculty: "WIiT",
          avatar: "Grzesiu.jpg"
        },
        {
          name: "Agata Pawlik",
          faculty: "WTCh",
          avatar: ""
        },
        {
          name: "Julia Rogacka",
          faculty: "WA",
          avatar: ""
        },
        {
          name: "Jędrzej Smolarkiewicz",
          faculty: "WARiE",
          avatar: "Jedrzej.jpg"
        },
        {
          name: "Aleksandra Stróżyk",
          faculty: "WIM",
          avatar: ""
        },
        {
          name: "Barbara Winiarczyk",
          faculty: "WIMiFT",
          avatar: "Basia.jpg"
        },
        {
          name: "Piotr Woźniak",
          faculty: "WILiT",
          avatar: "Piotr.jpg"
        },
        {
          name: "Karolina Zapadka",
          faculty: "WILiT",
          avatar: "Karolina.jpg"
        },
        {
          name: "Maria Zienkiewicz",
          faculty: "WIZ",
          avatar: "Maria.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
