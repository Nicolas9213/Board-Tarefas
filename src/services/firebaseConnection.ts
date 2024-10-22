import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs2qiWL-bQnbLhH7r5Ibxq3UsL17Iip9M",
  authDomain: "tarefasplus-1b0c7.firebaseapp.com",
  projectId: "tarefasplus-1b0c7",
  storageBucket: "tarefasplus-1b0c7.appspot.com",
  messagingSenderId: "686196997130",
  appId: "1:686196997130:web:31d07491c899deac2933f3"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };