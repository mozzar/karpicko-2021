<template>
  <div class="home">
    <home-hero />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "../components/Home/HomeHero";

export default {
  name: "Home",
  components: {
    HomeHero
  }
};
</script>
