<template>
  <div class="home">
    <home-hero />
    <contact />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "../components/Home/HomeHero";
import Contact from "../components/Home/Contact";

export default {
  name: "Home",
  components: {
    Contact,
    HomeHero
  }
};
</script>
