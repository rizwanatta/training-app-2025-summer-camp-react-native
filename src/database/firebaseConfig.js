import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgaL-_JZI30dDM5QrNLiC44lo87I-bI5k",
  authDomain: "johr2025-a4f94.firebaseapp.com",
  projectId: "johr2025-a4f94",
  storageBucket: "johr2025-a4f94.firebasestorage.app",
  messagingSenderId: "1045354540507",
  appId: "1:1045354540507:web:e7c714e4015ce87920cbfe",
  measurementId: "G-RWTKYFCTDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
