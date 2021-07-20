import { FETCH_COLLECTIONS_START, FETCH_COLLECTION_FAILURE, FETCH_COLLECTION_SUCCESS, UPDATE_COLLECTIONS, UPDATE_LOADING } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    loading: false,
    errorMessage: undefined,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                collections: action.payload,
            };
        case FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;