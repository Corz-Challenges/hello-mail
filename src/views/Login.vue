<template>
  <v-btn class="mx-2" dark color="pink" @click="loginGoogle">
    <v-icon dark class="mx-2">mdi-google</v-icon>
    sign in via google
  </v-btn>
</template>

<script>
import firebase from "firebase";
import {
  // firebase,
  db
} from "@/plugins/firebase";
export default {
  methods: {
    loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly') // this is to request contacts from user
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const token = result.credential.accessToken
          // console.log(token)
          // The signed-in user info.
          const { user } = result;
          window.localStorage.setItem("user", JSON.stringify(user));
          // Add a new document with a generated id.
          db.collection("profiles")
            .doc(user.uid)
            .set({
              name: user.displayName,
              phone: user.phoneNumber,
              address: null,
              postcode: null,
              id: user.uid,
              email: user.email,
              liveStatus: null,
              photo: user.photoURL
            })
            .then(() => {
              console.log(`Document written with ID: ${user}`);
            })
            .catch(error => {
              console.error(`Error adding document: `, error);
            });
          this.$router.push("/");
        })
        .catch(error => {
          console.error("error sign in with google", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
