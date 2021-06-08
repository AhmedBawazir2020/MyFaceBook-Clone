import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDmcPnU7yMKP0VYiUs2AVQkVNU6vuz6iWs",
    authDomain: "facebook-clone-ab.firebaseapp.com",
    databaseURL: "https://facebook-clone-ab.firebaseio.com",
    projectId: "facebook-clone-ab",
    storageBucket: "facebook-clone-ab.appspot.com",
    messagingSenderId: "312722800748",
    appId: "1:312722800748:web:efdfb3c41dc4b8f1b99849",
    measurementId: "G-DV4V1VXN7W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;