<template>
  <span>
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class=" hidden-lg-and-up"></v-spacer>
      <div class="d-flex align-center" @click="$vuetify.goTo(main.id)">
        <v-img
          alt="sspp-name"
          contain
          min-width="10"
          src="@/assets/SSPP_white.png"
          width="85"
        />
      </div>
      <v-spacer />
      <div v-for="(item, index) in items" :key="index">
        <v-btn
          text
          class="hidden-md-and-down"
          elevation="0"
          @click="$vuetify.goTo(item.id)"
          >{{ item.title }}</v-btn
        >
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
        { title: "Zaproszenie", id: "#invitation" },
        { title: "Rejestracja", id: "#registration" },
        { title: "Harmonogram", id: "#agenda" },
        { title: "Kontakt", id: "" },
        { title: "Zakwaterowanie", id: "" },
        { title: "Partnerzy", id: "" }
      ]
    };
  }
};
</script>

<style scoped></style>
