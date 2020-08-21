<template>
  <div class="home">
    <home-hero />
    <accommodation />
    <contact />
    <partners />
    <opinions />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "../components/Home/HomeHero";
import Contact from "../components/Home/Contact";
import Partners from "@/components/Home/Partners";
import Opinions from "@/components/Home/opinions/Opinions";
import Accommodation from "@/components/Home/accommodation/Accommodation";

export default {
  name: "Home",
  components: {
    Accommodation,
    Opinions,
    Contact,
    Partners,
    HomeHero
  }
};
</script>
