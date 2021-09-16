import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyADdVvTvD7sfgIOQB7EVXdpXfB6TZMUg_k",
  authDomain: "fir-auth-16sep.firebaseapp.com",
  projectId: "fir-auth-16sep",
  storageBucket: "fir-auth-16sep.appspot.com",
  messagingSenderId: "847119974122",
  appId: "1:847119974122:web:fd0aba60dcd56269b8e193",
  measurementId: "G-6HKMMQBH9W"
};

const app = initializeApp(firebaseConfig);
export default app;