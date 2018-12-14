import { HSE_FETCH_ARTICLE, HSE_CREATE_ARTICLE, HSE_DELETE_ARTICLE } from '../actions/types';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case HSE_FETCH_ARTICLE:
            return { ...state, errorMessage: action.payload };
        case HSE_CREATE_ARTICLE:
            return { ...state };
        case HSE_DELETE_ARTICLE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
            
    }

}