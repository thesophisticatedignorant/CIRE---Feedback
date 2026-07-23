import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "cire-conglomerate",
  appId: "1:849410729611:web:39f0173b5be4bafd81168e",
  storageBucket: "cire-conglomerate.firebasestorage.app",
  apiKey: "AIzaSyBKkJIG9r963JCq9UzsZ4vfQ_WS6jnYjQ8",
  authDomain: "cire-conglomerate.firebaseapp.com",
  messagingSenderId: "849410729611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (will start tracking automatically once configured)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize Firestore (if raw IP logging is explicitly requested later)
const db = getFirestore(app);

export { app, analytics, db };
