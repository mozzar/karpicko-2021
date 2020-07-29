<template>
  <div class="home">
    <home-hero />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HomeHero from "../components/Home/HomeHero";

export default {
  name: "Home",
  components: {
    HomeHero,
    HelloWorld
  }
};
</script>
