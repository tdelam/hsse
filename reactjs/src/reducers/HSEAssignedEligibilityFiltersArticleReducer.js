import { HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR } from '../actions/types';

const INITIAL_STATE = {
    assignedEligibilityFiltersErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE: 
            return { ...state, hseAssignedEligibilityFiltersArticles: action.payload };
        case HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hseAssignedEligibilityFiltersErrorMessage: 'Error listing assigned eligibility and filters articles' };
        default:
            return state;
            
    }

}
