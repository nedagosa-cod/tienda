import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjL-Z0D0wus0R4jQk1lO9Q9q1dSBwiI6U",
    authDomain: "ecommercend-39a07.firebaseapp.com",
    projectId: "ecommercend-39a07",
    storageBucket: "ecommercend-39a07.appspot.com",
    messagingSenderId: "381302104946",
    appId: "1:381302104946:web:4df2d47a6f40ba63a533eb"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

export {auth}