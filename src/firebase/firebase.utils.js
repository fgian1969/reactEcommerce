import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAsZ6FsiK8MSPhWSD2kmAl9qRe58s9ow10",
    authDomain: "prohorse-cda8f.firebaseapp.com",
    databaseURL: "https://prohorse-cda8f.firebaseio.com",
    projectId: "prohorse-cda8f",
    storageBucket: "prohorse-cda8f.appspot.com",
    messagingSenderId: "964984021971",
    appId: "1:964984021971:web:8c8b71974fbbc0a9244526"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;