// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCc_Or-t6NOXB-lnrBczOQz2_3KRAC0noo",
    authDomain: "twitter-clone-27217.firebaseapp.com",
    projectId: "twitter-clone-27217",
    storageBucket: "twitter-clone-27217.appspot.com",
    messagingSenderId: "541797459536",
    appId: "1:541797459536:web:f9fee395363521924c9355",
    measurementId: "G-2LEYEX0HT1"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;