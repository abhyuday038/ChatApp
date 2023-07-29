import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC8TVuJeLzpuO82SA38MDKY0lXOICDGmmc",
    authDomain: "chat-c110b.firebaseapp.com",
    projectId: "chat-c110b",
    storageBucket: "chat-c110b.appspot.com",
    messagingSenderId: "124036826663",
    appId: "1:124036826663:web:f3da1370b1bdb7b688b002"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();