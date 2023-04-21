import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1WMdyAd12F-NrTWYwHw7XlYJpTro10Fs",
  authDomain: "react-firebase-9fbd1.firebaseapp.com",
  projectId: "react-firebase-9fbd1",
  storageBucket: "react-firebase-9fbd1.appspot.com",
  messagingSenderId: "44956472734",
  appId: "1:44956472734:web:a9674841c02588dc5d728f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
