
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRSRl0Zn3llK9XU4SjNCH_SR0zuCk8WVI",
  authDomain: "bible-f426d.firebaseapp.com",
  projectId: "bible-f426d",
  storageBucket: "bible-f426d.appspot.com",
  messagingSenderId: "1008153669257",
  appId: "1:1008153669257:web:0ae50e482b085cc30ba058",
  measurementId: "G-ML60L030D6"
};

// Initialize Firebase
export const Firebase_app = initializeApp(firebaseConfig);
export const Firebase_analytics = getAnalytics(Firebase_app);