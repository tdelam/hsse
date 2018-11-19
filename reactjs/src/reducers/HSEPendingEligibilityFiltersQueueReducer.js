import { HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE, HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    pendingEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE: 
            return { ...state, hsePendingEligibilityFiltersArticles: action.payload };
        case HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE_ERROR: 
            return { ...state, hsePendingEligibilityFiltersErrorMessage: 'Error listing pending eligibility and filters articles' };
        default:
            return state;
            
    }

}
