<template>
  <span>
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class=" hidden-lg-and-up"></v-spacer>
      <div class="d-flex align-center">
        <v-btn
          v-if="this.$route.path == '/'"
          text
          block
          x-large
          @click="() => $vuetify.goTo(main.id)"
        >
          <v-img
            alt="sspp-name"
            contain
            min-width="10"
            src="@/assets/SSPP_white.png"
            width="85"
          />
        </v-btn>
        <v-btn
          v-else
          text
          block
          x-large
          @click="() => this.$router.push('/#hero')"
        >
          <v-img
            alt="sspp-name"
            contain
            min-width="10"
            src="@/assets/SSPP_white.png"
            width="85"
          />
        </v-btn>
      </div>
      <v-spacer />
      <div v-for="(item, index) in items" :key="index">
        <v-btn
          v-if="currentRouteName == '/'"
          text
          class="hidden-md-and-down"
          elevation="0"
          @click="() => $vuetify.goTo(item.id)"
          >{{ item.title }}</v-btn
        >
      </div>
      <v-btn text class="hidden-md-and-down" elevation="0" href="#/crew">
        Kadra
      </v-btn>
      <v-btn text class="hidden-md-and-down" elevation="0" href="#/rules">
        Regulamin
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="primary"
      dark
      disable-resize-watcher
    >
      <v-list>
        <v-list-item
          v-if="this.$route.path == '/'"
          @click="() => $vuetify.goTo(main.id)"
        >
          <div class="d-flex align-center">
            <v-list-item-content class="justify-center">
              <v-img
                min-width="100"
                src="@/assets/other/logo_sspp_biale.png"
                width="200"
              />
            </v-list-item-content>
          </div>
        </v-list-item>
        <v-list-item v-else @click="() => this.$router.push('/#hero')">
          <div class="d-flex align-center">
            <v-list-item-title>
              <v-img
                contain
                min-width="100"
                src="@/assets/other/logo_sspp_biale.png"
                width="200"
              />
            </v-list-item-title>
          </div>
        </v-list-item>
        <div v-for="item in items" :key="item.title">
          <v-list-item
            v-if="currentRouteName == '/'"
            @click="$vuetify.goTo(item.id)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>

        <v-list-item href="#/crew">
          <v-list-item-content>
            <v-list-item-title>Kadra</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#/rules">
          <v-list-item-content>
            <v-list-item-title>Regulamin</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appTitle: "Karpicko 2020",
      drawer: false,
      main: { title: "Karpicko 2020", id: "#hero" },
      items: [
        { title: "Rekrutacja", id: "#invitation" },
        { title: "Atrakcje", id: "#agenda" },
        { title: "Zakwaterowanie", id: "#accommodation" },
        { title: "Partnerzy", id: "#partners" }
      ]
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    }
  },
  mounted() {
    console.info("App this router:", this.$router);
    console.info("App currentRoute:", this.$router.currentRoute);
    console.info("App currentRoute:", this.$router.currentRoute.path);
    console.info("App currentRoute:", this.$route.path);
  }
};
</script>

<style scoped></style>
