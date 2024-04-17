// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMinvPpThMw5pgD9ZSxiL9woMpODTD4UI",
  authDomain: "ecommerce-83e91.firebaseapp.com",
  projectId: "ecommerce-83e91",
  storageBucket: "ecommerce-83e91.appspot.com",
  messagingSenderId: "1071046648827",
  appId: "1:1071046648827:web:2e5c94a5abb2cb4526215e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);




export {fireDB, auth} 