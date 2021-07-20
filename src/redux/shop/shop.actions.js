import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { FETCH_COLLECTIONS_START, FETCH_COLLECTION_FAILURE, FETCH_COLLECTION_SUCCESS, UPDATE_LOADING } from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
    type: FETCH_COLLECTION_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};