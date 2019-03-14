import { 
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIORFILTER,
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIORFILTER_ERROR,

    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIORFILTER,
    SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIORFILTER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE: 
            return { ...state, hsePendingEligibilityFiltersArticles: action.payload };

        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };

        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIORFILTER: 
            return { ...state, hsePendingEligibilityFiltersArticles: action.payload };
        
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIORFILTER_ERROR: 
            return { ...state, hsePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };
        
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIORFILTER: 
            return { ...state, hsePendingEligibilityFiltersArticles: action.payload };
        
        case SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIORFILTER_ERROR: 
            return { ...state, hsePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };
        default:
            return state;
            
    }

}
