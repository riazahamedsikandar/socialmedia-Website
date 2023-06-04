// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5fzCL3CiBNZzU9qHH42nkG812jVq4Oqc",
  authDomain: "social-media-ffa90.firebaseapp.com",
  projectId: "social-media-ffa90",
  storageBucket: "social-media-ffa90.appspot.com",
  messagingSenderId: "1000042058843",
  appId: "1:1000042058843:web:8ea1b3d89b4372d0f71b7e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);