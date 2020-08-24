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
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        text
        class="hidden-md-and-down"
        elevation="0"
        @click="$vuetify.goTo(item.id)"
        >{{ item.title }}</v-btn
      >
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
        <v-list-item @click="$vuetify.goTo(main.id)">
          <div class="d-flex align-center">
            <v-img
              alt="Fut-name"
              contain
              min-width="100"
              src="@/assets/FUT_white.png"
              width="200"
            />
          </div>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="$vuetify.goTo(item.id)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        { title: "Kontakt", id: "#contact" },
        { title: "Partnerzy", id: "#partners" }
      ]
    };
  }
};
</script>

<style scoped></style>
