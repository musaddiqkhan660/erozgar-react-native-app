import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD3XkgvTMXy5wa0x9WrslGg9ef-lUIu11w",
  authDomain: "course-app-erozgaar.firebaseapp.com",
  projectId: "course-app-erozgaar",
  storageBucket: "course-app-erozgaar.appspot.com",
  messagingSenderId: "88274481881",
  appId: "1:88274481881:web:d9ef5b0594ace64028c4c8",
  measurementId: "G-HEVM3V3NNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;