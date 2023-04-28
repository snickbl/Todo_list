import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNgCWqQawKKZtilRWOx9gi5Ltxa5qKBzA",
    authDomain: "todolist-d93c8.firebaseapp.com",
    databaseURL: "https://todolist-d93c8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todolist-d93c8",
    storageBucket: "todolist-d93c8.appspot.com",
    messagingSenderId: "442070187397",
    appId: "1:442070187397:web:8c0dc3b07967d52eda18ec"
  };

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)

    export { db }