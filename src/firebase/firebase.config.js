// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAhvpm8emC260MBS1MjMUtth-LwJAYA5U",
  authDomain: "fir-all-one.firebaseapp.com",
  projectId: "fir-all-one",
  storageBucket: "fir-all-one.appspot.com",
  messagingSenderId: "389516314401",
  appId: "1:389516314401:web:1a40ac2dded1d8ffe66060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app