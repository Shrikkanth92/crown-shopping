import { UPDATE_COLLECTIONS, UPDATE_LOADING } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    loading: true,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            }
        case UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state;
    }
}

export default shopReducer;