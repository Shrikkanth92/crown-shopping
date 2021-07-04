import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAl2_zeXyQVIV1Qa2vNHzZs8VsANRQOYs8",
    authDomain: "crwn-db-32fa8.firebaseapp.com",
    projectId: "crwn-db-32fa8",
    storageBucket: "crwn-db-32fa8.appspot.com",
    messagingSenderId: "876646430353",
    appId: "1:876646430353:web:e8317b5907e4e9dcf7f130",
    measurementId: "G-EL6EKT5SD8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log(userAuth);
    if(userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const userSnapshot = userRef.get();

        if (!userSnapshot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
            } catch(err) {
                console.log('error creating user', err.message);
            }
        }
        return userRef;
    }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;