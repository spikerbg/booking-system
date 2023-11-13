// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8tMPhcZ-4qCJ1OWkcL9zwRB0fkpjg9U",
  authDomain: "medirent-d0236.firebaseapp.com",
  projectId: "medirent-d0236",
  storageBucket: "medirent-d0236.appspot.com",
  messagingSenderId: "279145594204",
  appId: "1:279145594204:web:21e26fda18f561de535599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();