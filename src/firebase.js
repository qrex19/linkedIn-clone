// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvAVqQkJqJ9_LgxIwlSd6stXpb6LnG740",
  authDomain: "linkedin-clone-cbe02.firebaseapp.com",
  projectId: "linkedin-clone-cbe02",
  storageBucket: "linkedin-clone-cbe02.appspot.com",
  messagingSenderId: "492316964483",
  appId: "1:492316964483:web:5cee127fcc669f8afa0db6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, firebase };
