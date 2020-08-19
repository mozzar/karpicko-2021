<template>
  <div class="home">
    <home-hero />
    <contact />
    <partners />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "../components/Home/HomeHero";
import Contact from "../components/Home/Contact";
import Partners from "@/components/Home/Partners";

export default {
  name: "Home",
  components: {
    Contact,
    Partners,
    HomeHero
  }
};
</script>
