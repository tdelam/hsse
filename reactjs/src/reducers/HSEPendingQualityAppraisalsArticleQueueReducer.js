import { 
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER,
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER,
    HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };

        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };

        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };
        
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };
        default:
            return state;
            
    }

}
