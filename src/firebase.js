// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVxnCzWDpc1ng8cnkKKrMfemSuJQAeDgQ",
  authDomain: "clone-2b7e1.firebaseapp.com",
  projectId: "clone-2b7e1",
  storageBucket: "clone-2b7e1.appspot.com",
  messagingSenderId: "250373083420",
  appId: "1:250373083420:web:d81e2a6df1f209d4a06ad9",
  measurementId: "G-92H4HTNZY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);