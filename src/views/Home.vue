<template>
  <div class="home">
    <home-hero />
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

export default {
  name: "Home",
  components: {
    Opinions,
    Contact,
    Partners,
    HomeHero
  }
};
</script>
