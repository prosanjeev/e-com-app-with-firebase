// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfX5NBdIFHa0mjnX-VoNAi9FdTjUxVLXc",
  authDomain: "e-commerce-98d7d.firebaseapp.com",
  projectId: "e-commerce-98d7d",
  storageBucket: "e-commerce-98d7d.appspot.com",
  messagingSenderId: "786751738352",
  appId: "1:786751738352:web:932aea2b8ae3e5a9670d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;