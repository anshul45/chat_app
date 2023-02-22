import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTY0hAPSvXgotMDJiibyRlUpXPnU8gKHE",
  authDomain: "chat-b88bc.firebaseapp.com",
  projectId: "chat-b88bc",
  storageBucket: "chat-b88bc.appspot.com",
  messagingSenderId: "88816703508",
  appId: "1:88816703508:web:29465380ba3a6073c2af01",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
