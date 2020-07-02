<template>
  <v-app>
    <!-- this will be splitted into a Nav component -->
    <!-- nav -->
    <!-- navDrawer -->
    <v-navigation-drawer app v-model="drawer">
      <!-- content -->
      test12345689797
    </v-navigation-drawer>
    <!-- ./Nav drawer -->

    <v-app-bar app color="primary" dark>
      <!-- this should open the side menu (navigation drawer) -->
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      Hello-mail
      <v-spacer></v-spacer>
      <!--  -->
      <v-btn v-for="btn in buttons" :key="btn.name" text>
        <v-icon>mdi-{{ btn.icon }}</v-icon>
        {{ btn.name }}
      </v-btn>
    </v-app-bar>
    <!-- ./nav -->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    //
    buttons: [
      {
        name: "home",
        icon: "",
        link: "/"
      },
      {
        name: "Login your gmail",
        icon: "",
        link: ""
      },
      {
        name: "our features",
        icon: "",
        link: ""
      },
      {
        name: "about us",
        icon: "",
        link: ""
      },
      {
        name: "logout",
        icon: "",
        link: ""
      }
    ]
  })
};
</script>
