<template>
  <div id="invitation" class="mt-n8">
    <v-container fluid>
      <component-title text="Rekrutacja" />
      <component-text
        text="Drodzy Studenci Pierwszego Roku! Jest nam szalenie miło zaprosić Was
            do uczestnictwa w Obozie Szkoleniowo-Integracyjnym “Karpicko” dla
            rocznika “0” Politechniki Poznańskiej, który odbędzie się w wrześniu
            2020!"
      />
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
      <component-text
        text="Jeśli chcesz się przystąpić do rekrutacji na nasz jedyny w swoim
            rodzaju obóz, to wypełnij formularz poniżej."
      />
      <invitation-parallax />
    </v-container>
  </div>
</template>

<script>
import InvitationParallax from "@/components/Home/invitation/InvitationParallax";
import InvitationCard from "@/components/Home/invitation/InvitationCard";
import ComponentTitle from "@/components/ComponentTitle";
import ComponentText from "@/components/ComponentText";
export default {
  name: "Invitation",
  components: {
    ComponentText,
    ComponentTitle,
    InvitationCard,
    InvitationParallax
  },
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
