import { FETCH_HSE_ARTICLE, CREATE_HSE_ARTICLE, DELETE_HSE_ARTICLE } from '../actions/types';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case FETCH_HSE_ARTICLE:
            return { ...state, errorMessage: action.payload };
        case CREATE_HSE_ARTICLE:
            return { ...state };
        case DELETE_HSE_ARTICLE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
            
    }

}