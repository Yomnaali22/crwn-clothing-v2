// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  //retrieve files inside database
  doc, 
  // getting"access" documents data
  getDoc, 
  // setting documents data
  setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHoDV-1eKTYMu1IDKmYhuPUc7yB8DKzIo",
  authDomain: "crwn-clothing-db-8981d.firebaseapp.com",
  projectId: "crwn-clothing-db-8981d",
  storageBucket: "crwn-clothing-db-8981d.appspot.com",
  messagingSenderId: "837027532432",
  appId: "1:837027532432:web:b28e431577959ce1905215"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// database 
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid) 
  console.log(userDocRef)
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists())

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt
      })
    } catch(error){
      console.log('eroor creating user', error.message);

    }
  }
  return userDocRef;
}
