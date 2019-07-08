import { 
    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE,
    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_DETAILER,
    HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
    pendingohErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE: 
            return { ...state, hsePendingPresentationDetailsArticles: action.payload };

        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingTranslatingTitlesErrorMessage: action.payload };

        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_DETAILER: 
            return { ...state, hsePendingTranslatingTitlesArticles: action.payload };
        
        case HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR: 
            return { ...state, hsePendingTranslatingTitlesErrorMessage: action.payload };
        default:
            return state;
            
    }

}
