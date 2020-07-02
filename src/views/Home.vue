<template>
  <v-card>
    <v-card-title>
      Home Page
    </v-card-title>
    <v-card-text>
      Welcome
      {{ x.title }}
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
// import { firebase } from "@/plugins/firebase";

export default {
  name: "Home",
  data() {
    return {
      x: {}
    };
  },
  created() {
    this.$http.get("todos/1").then(res => {
      this.x = res.data;
    });
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // eslint-disable-next-line callback-return
          next();
        } else {
          vm.$router.push("/login");
        }
      });
    });
  }
};
</script>
