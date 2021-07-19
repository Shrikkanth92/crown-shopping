import { UPDATE_COLLECTIONS, UPDATE_LOADING } from "./shop.types";

export const updateCollections = (collectionsMap) => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
});

export const updateLoading = (loading) => ({
    type: UPDATE_LOADING,
    payload: loading,
});