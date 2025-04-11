// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN_iX0MBuZQfgah9bF-jvQYZo1AS9DGMA",
  authDomain: "netflixgpt-f95c4.firebaseapp.com",
  projectId: "netflixgpt-f95c4",
  storageBucket: "netflixgpt-f95c4.firebasestorage.app",
  messagingSenderId: "638044912561",
  appId: "1:638044912561:web:2fa03c4a2a9d5561939b90",
  measurementId: "G-Y09VYVHCX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
