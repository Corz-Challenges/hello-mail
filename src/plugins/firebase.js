import Firebase from "firebase";

const firebaseConfig = {
  //  copy config here
  apiKey: "AIzaSyDHor5N4SXVesycsIprIZ9w2_J1M4p4I30",
  authDomain: "hello-mail-electron.firebaseapp.com",
  databaseURL: "https://hello-mail-electron.firebaseio.com",
  projectId: "hello-mail-electron",
  storageBucket: "hello-mail-electron.appspot.com",
  messagingSenderId: "133018416826",
  appId: "1:133018416826:web:edc2146bb111adeed9b483"
};

require("firebase/firestore");

const firebase = Firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();

export { firebase, db };
