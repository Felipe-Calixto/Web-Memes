import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6LaBIoQEr4iWB6oSwCS88mRPembMxbng",
  authDomain: "web-memes.firebaseapp.com",
  projectId: "web-memes",
  storageBucket: "web-memes.appspot.com",
  messagingSenderId: "454810128035",
  appId: "1:454810128035:web:5f9c9d625fa0f34d027916"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };