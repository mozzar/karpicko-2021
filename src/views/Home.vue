<template>
  <div class="home">
    <home-hero />
    <info />
    <invitation />
    <agenda />
    <accommodation />
    <partners />
    <opinions />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "../components/Home/HomeHero";
import Partners from "@/components/Home/partners/Partners";
import Opinions from "@/components/Home/opinions/Opinions";
import Accommodation from "@/components/Home/accommodation/Accommodation";
import Agenda from "@/components/Home/agenda/Agenda";
import Invitation from "@/components/Home/invitation/Invitation";
import Info from "@/components/Home/Info";

export default {
  name: "Home",
  components: {
    Info,
    Invitation,
    Agenda,
    Accommodation,
    Opinions,
    Partners,
    HomeHero
  }
};
</script>
