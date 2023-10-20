// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh5MKVCIhyOs0Jkp2VAG9uxeEhml0mQd4",
  authDomain: "brand-shop-28eb0.firebaseapp.com",
  projectId: "brand-shop-28eb0",
  storageBucket: "brand-shop-28eb0.appspot.com",
  messagingSenderId: "747919047699",
  appId: "1:747919047699:web:38b15ed5bd9cffe50853e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;