import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/ƒirestorage";

const firebaseConfig = {
  apiKey: "AIzaSyBjHlDY2gh98wlYpQpT1PfoldP8yeWoToc",
  authDomain: "nextfire-16161.firebaseapp.com",
  projectId: "nextfire-16161",
  storageBucket: "nextfire-16161.appspot.com",
  messagingSenderId: "882727306061",
  appId: "1:882727306061:web:bde8fe8a3bc89cb0b22d04",
  measurementId: "G-LJ2ZFJGP7M",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
