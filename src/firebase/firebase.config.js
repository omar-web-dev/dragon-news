// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFWoJNhLpomsAz0S870jQV60OzO3wyNcc",
  authDomain: "dragon-news-14e03.firebaseapp.com",
  projectId: "dragon-news-14e03",
  storageBucket: "dragon-news-14e03.appspot.com",
  messagingSenderId: "554797777010",
  appId: "1:554797777010:web:7ec1b19de78771524e82eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app