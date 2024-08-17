// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGRouG_7r4LvYHWSQLbNEfTTbDmXvsDZ4",
  authDomain: "react-blog-hook-3dba2.firebaseapp.com",
  projectId: "react-blog-hook-3dba2",
  storageBucket: "react-blog-hook-3dba2.appspot.com",
  messagingSenderId: "1013721822574",
  appId: "1:1013721822574:web:799664248f6764868f7d7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
