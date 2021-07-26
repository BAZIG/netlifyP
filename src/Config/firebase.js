import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBRz4Mnuda5e0b--UXWdY7sdeArPp-kmzI",
  authDomain: "whatsappclone-64d35.firebaseapp.com",
  databaseURL: "https://whatsappclone-64d35-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whatsappclone-64d35",
  storageBucket: "whatsappclone-64d35.appspot.com",
  messagingSenderId: "93298574533",
  appId: "1:93298574533:web:8f78cc4055df890b101cac"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;
