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

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(element => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, element);
    });

    await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;