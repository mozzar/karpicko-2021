<template>
  <div id="invitation" class="mt-n8">
    <v-container fluid>
      <component-title text="Rekrutacja" />
      <component-text
        text="Zapraszamy! Drodzy Studenci Pierwszego Roku! Jest nam szalenie miło
        zaprosić Was do uczestnictwa w Obozie Integracyjno-Szkoleniowym
        “Karpicko” dla pierwszorocznych studentów Politechniki Poznańskiej,
        który odbędzie się we wrześniu 2020!"
      />
      <component-text
        text="Zapraszamy do zapoznania się z oferowanymi
      przez nas atrakcjami i opisami obozu, a w przypadku pojawienia się
       pytań zachęcamy do kontaktu."
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
        text="Aby przystąpić do rekrutacji i móc wziąć udział w najbardziej
        wyjątkowym obozie dedykowanym właśnie dla Was zapraszamy do wypełnienia
        formularza poniżej."
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
        title: "Szkolenia i integracje",
        text:
          "Przygotowane specjalnie dla Was aktywności zaplanowane podczas pięciu " +
          "dni obozu, które pozwolą Wam zarówno rozwinąć swoje umiejętności " +
          "miękkie jak również zapoznać się z panującymi na Uczelni zwyczajami.",
        icon: "icon_presentation.png"
      },
      card2: {
        title: "Nowe znajomości",
        text:
          "Będziecie mieli możliwość poznać zarówno innych pierwszorocznych " +
          "studentów, którzy tak jak Wy po raz pierwszy przekraczają mury " +
          "Uczelni, ale także starszych kolegów z Samorządu Studentów, którzy " +
          "wprowadzą Was w tajniki życia studenckiego.",
        icon: "icon_friends.png"
      },
      card3: {
        title: "Kampus Warta",
        text:
          "Czyli niepowtarzalna okazja poznania z nami Politechniki Poznańskiej " +
          "jeszcze zanim rozpoczniecie zajęcia. Dzięki temu nie ma mowy, że " +
          "zgubicie się pierwszego dnia w zawiłych korytarzach naszych budynków " +
          "- ot taka oszczędność czasu i stresu specjalnie dla Was!",
        icon: "icon_university.png"
      }
    };
  }
};
</script>

<style scoped></style>
