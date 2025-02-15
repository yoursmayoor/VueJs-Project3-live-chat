import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSKaRVkqzT0eh7KcMma9DS3RFXT97fBZ0",
  authDomain: "vuejsproject-72748.firebaseapp.com",
  projectId: "vuejsproject-72748",
  storageBucket: "vuejsproject-72748.firebasestorage.app",
  messagingSenderId: "435891475014",
  appId: "1:435891475014:web:7121cc70accc815ef0f047",
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };
