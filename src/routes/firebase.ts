
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCX8YT3-obFHyxj_G5J5HzvmKCiA3mLfeI",
  authDomain: "nwitter-792b2.firebaseapp.com",
  projectId: "nwitter-792b2",
  storageBucket: "nwitter-792b2.appspot.com",
  messagingSenderId: "897798222415",
  appId: "1:897798222415:web:d4b6ab195fca4ebb56b03a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);