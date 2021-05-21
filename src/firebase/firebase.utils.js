import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDzo6GVrSa1GnUIi91iaHPC3Y0ke3vFWHU",
  authDomain: "crown-e-commerce-db.firebaseapp.com",
  projectId: "crown-e-commerce-db",
  storageBucket: "crown-e-commerce-db.appspot.com",
  messagingSenderId: "956739058513",
  appId: "1:956739058513:web:bcc7add41d39edfcab3170",
  measurementId: "G-CB7Q8B5SEC"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;