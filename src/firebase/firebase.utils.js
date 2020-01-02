import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDCuKacC_fLPU_Q66jANlnSeLN3VKcjTAo",
  authDomain: "crwn-db-35958.firebaseapp.com",
  databaseURL: "https://crwn-db-35958.firebaseio.com",
  projectId: "crwn-db-35958",
  storageBucket: "crwn-db-35958.appspot.com",
  messagingSenderId: "266781556553",
  appId: "1:266781556553:web:fff54301d70b7d8e3e6498",
  measurementId: "G-MYSXYNN9DC"
};
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;