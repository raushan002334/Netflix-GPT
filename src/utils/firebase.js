// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdsKfPdo0fffwdmcxTpcVEXjL6m5kKvBw",
  authDomain: "netflixgpt-d5c37.firebaseapp.com",
  projectId: "netflixgpt-d5c37",
  storageBucket: "netflixgpt-d5c37.firebasestorage.app",
  messagingSenderId: "384132510921",
  appId: "1:384132510921:web:0c2e4be9f1943a8dc44918",
  measurementId: "G-2710E62TZ7" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);