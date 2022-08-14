// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2g6ljjtB81vU2D2joHRFLc56NBIMexfU",
    authDomain: "tms-diploma-main.firebaseapp.com",
    projectId: "tms-diploma-main",
    storageBucket: "tms-diploma-main.appspot.com",
    messagingSenderId: "415357627342",
    appId: "1:415357627342:web:92a8b12c17cca0e694199f",
    measurementId: "G-RRKVP5RHLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);