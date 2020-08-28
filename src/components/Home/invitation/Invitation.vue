<template>
  <div id="invitation" class="mt-n8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-bold mt-7">Rekrutacja</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="11" lg="7" md="9">
          <h2 class="headline">
            Drodzy Studenci Pierwszego Roku! Jest nam szalenie miło zaprosić Was
            do uczestnictwa w Obozie Szkoleniowo-Integracyjnym “Karpicko” dla
            rocznika “0” Politechniki Poznańskiej, który odbędzie się w wrześniu
            2020!
          </h2>
        </v-col>
      </v-row>
      <v-row class="mt-10" align="start" justify="center">
        <invitation-card
          :title="card1.title"
          :text="card1.text"
          :icon="card1.icon"
        />
        <invitation-card
          :title="card2.title"
          :text="card2.text"
          :icon="card2.icon"
        />
        <invitation-card
          :title="card3.title"
          :text="card3.text"
          :icon="card3.icon"
        />
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="11" lg="7" md="9">
          <h2 class="headline">
            Jeśli chcesz się przystąpić do rekrutacji na nasz jedyny w swoim
            rodzaju obóz, to wypełnij formularz poniżej.
          </h2>
        </v-col>
      </v-row>
      <invitation-parallax />
    </v-container>
  </div>
</template>

<script>
import InvitationParallax from "@/components/Home/invitation/InvitationParallax";
import InvitationCard from "@/components/Home/invitation/InvitationCard";
export default {
  name: "Invitation",
  components: { InvitationCard, InvitationParallax },
  data() {
    return {
      card1: {
        title: "Lorem ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
          "facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi, sit amet " +
          "mollis massa justo eget sapien. Phasellus quis consequat justo. Nulla " +
          "elementum mattis dapibus.",
        icon: "question.png"
      },
      card2: {
        title: "Lorem ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
          "facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi.",
        icon: "question.png"
      },
      card3: {
        title: "Lorem ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
          "facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi, sit amet " +
          "mollis massa justo eget sapien. Phasellus quis consequat justo. Nulla ",
        icon: "question.png"
      }
    };
  }
};
</script>

<style scoped></style>
