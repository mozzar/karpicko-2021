<template>
  <div id="crew">
    <v-container fluid>
      <component-title text="Kadra" />

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
              <crew-card
                :name="item.name"
                :faculty="item.faculty"
                :avatar="item.avatar"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CrewCard from "./CrewCard";
import ComponentTitle from "@/components/ComponentTitle";
export default {
  name: "Crew",
  components: { ComponentTitle, CrewCard },
  data() {
    return {
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
          avatar: "Bartek_C.jpg"
        },
        {
          name: "Natalia Fedko",
          faculty: "WA",
          avatar: "Natalka.jpg"
        },
        {
          name: "Wojciech Gindera",
          faculty: "WIŚiE",
          avatar: "Wojtek_G.jpg"
        },
        {
          name: "Patryk Ginter",
          faculty: "WIMiFT",
          avatar: ""
        },
        {
          name: "Marta Kocurek",
          faculty: "WTCh",
          avatar: "Kocurek.jpg"
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
          avatar: "Kurz.jpeg"
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
          name: "Daniel Mokrzan",
          faculty: "WILiT",
          avatar: "Daniel_M.jpg"
        },
        {
          name: "Oskar Napierała",
          faculty: "WIM",
          avatar: "Oskar.jpg"
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
          avatar: "Julka.jpeg"
        },
        {
          name: "Jędrzej Smolarkiewicz",
          faculty: "WARiE",
          avatar: "Jedrzej.jpg"
        },
        {
          name: "Aleksandra Stróżyk",
          faculty: "WIM",
          avatar: "Ola_S.jpeg"
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
