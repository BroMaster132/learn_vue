import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCoaVsPNtrMlBJ1JYSD5s7EsxsQmGzubb8",
  authDomain: "learn-vue-b1afe.firebaseapp.com",
  projectId: "learn-vue-b1afe",
  storageBucket: "learn-vue-b1afe.appspot.com",
  messagingSenderId: "56216045727",
  appId: "1:56216045727:web:914f3fb1644d7f51103aaa"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }