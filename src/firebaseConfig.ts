// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdVOMK7B1fPrNw4z0Or384GA8b4vYZyVU",
  authDomain: "social-media-app-22a95.firebaseapp.com",
  projectId: "social-media-app-22a95",
  storageBucket: "social-media-app-22a95.firebasestorage.app",
  messagingSenderId: "876424131059",
  appId: "1:876424131059:web:de30521af679b151ec6286"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default  app;