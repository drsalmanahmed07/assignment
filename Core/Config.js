import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAW5TH53-34k2Qqom_-vYKouMbwmkhPHhA",
  authDomain: "salman-b619f.firebaseapp.com",
  projectId: "salman-b619f",
  storageBucket: "salman-b619f.appspot.com",
  messagingSenderId: "987941510718",
  appId: "1:987941510718:web:c2fdf0364e53984e85fb6f"

};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);