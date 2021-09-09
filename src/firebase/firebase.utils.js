import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDCOyJeE4GqN_HcZopNIkqZQTGHlCZc0w",
  authDomain: "my-ecommers-db.firebaseapp.com",
  projectId: "my-ecommers-db",
  storageBucket: "my-ecommers-db.appspot.com",
  messagingSenderId: "126077555238",
  appId: "1:126077555238:web:9e52be0959307b3bb24ce7",
  measurementId: "G-B64K1RS3BF",
};

export const createUserProfileDocument = async (userAuth, additionData) => {
  if(!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      })
    }catch(error){
      console.log('error: ', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config)
     
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Google authentication
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'}) //this line is for the google signin pop-up

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase