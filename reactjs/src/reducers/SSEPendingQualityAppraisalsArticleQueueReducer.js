import { 
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIORFILTER,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIORFILTER_ERROR,

    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIORFILTER,
    SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIORFILTER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };

        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };

        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIORFILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIORFILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIORFILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIORFILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };
        default:
            return state;
            
    }

}
