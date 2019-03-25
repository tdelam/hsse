import { 
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };

        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };

        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisals articles' };
        default:
            return state;
            
    }

}
