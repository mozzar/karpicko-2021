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
          text
          block
          x-large
          href="#/"
          @click="() => $vuetify.goTo(main.id)"
        >
          <v-img
            alt="sspp-name"
            contain
            min-width="10"
            src="@/assets/other/logo_sspp_white_narrow.png"
            width="90"
          />
        </v-btn>
      </div>
      <v-spacer />
      <div v-for="(item, index) in items" :key="index">
        <v-btn
          v-if="currentRouteName == '/'"
          text
          class="hidden-md-and-down text-button"
          elevation="0"
          @click="() => $vuetify.goTo(item.id)"
          >{{ item.title }}</v-btn
        >
      </div>
      <div v-for="page in pages" :key="page.title">
        <v-btn
          text
          class="hidden-md-and-down text-button"
          elevation="0"
          :href="page.url"
        >
          {{ page.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="primary"
      dark
      disable-resize-watcher
    >
      <v-list>
        <v-list-item href="#/" @click="() => $vuetify.goTo(main.id)">
          <div class="d-flex align-center">
            <v-list-item-content class="justify-center">
              <v-img
                min-width="100"
                src="@/assets/other/logo_sspp_white.png"
                width="200"
              />
            </v-list-item-content>
          </div>
        </v-list-item>
        <div v-for="item in items" :key="item.title">
          <v-list-item
            v-if="currentRouteName == '/'"
            @click="$vuetify.goTo(item.id)"
          >
            <v-list-item-content>
              <v-list-item-title class="text-button">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-for="page in pages" :key="page.url">
          <v-list-item :href="page.url">
            <v-list-item-content>
              <v-list-item-title class="text-button">
                {{ page.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appTitle: "Karpicko 2021",
      drawer: false,
      main: { title: "Karpicko 2021", id: "#hero" },
      items: [
        { title: "Rekrutacja", id: "#invitation" },
        { title: "Atrakcje", id: "#agenda" },
        { title: "Zakwaterowanie", id: "#accommodation" },
        { title: "Partnerzy", id: "#partners" }
      ],
      pages: [
        { title: "Strona główna", url: "/" },
        { title: "Kadra", url: "#/kadra" },
        { title: "Regulamin", url: "#/regulamin" },
        { title: "Kontakt", url: "#/kontakt" }
      ]
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped></style>
