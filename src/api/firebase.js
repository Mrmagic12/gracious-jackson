// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

logEvent(analytics, "event");
const firebaseConfig = {
  apiKey: "AIzaSyAxIb9ukRFMH0T-axysXvAgJ-NLMMx-f7g",
  authDomain: "pos-ea5c9.firebaseapp.com",
  databaseURL:
    "https://pos-ea5c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pos-ea5c9",
  storageBucket: "pos-ea5c9.appspot.com",
  messagingSenderId: "655303904063",
  appId: "1:655303904063:web:69bb51e829f4f2c1d6a18a",
  measurementId: "G-H9PEM4WQFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
