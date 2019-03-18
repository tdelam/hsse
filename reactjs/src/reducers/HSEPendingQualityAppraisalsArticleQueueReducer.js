import { 
    HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_QUEUE,
    HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_QUEUE_ERROR,

    HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_JUNIORFILTER,
    HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_JUNIORFILTER_ERROR,

    HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_SENIORFILTER,
    HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_SENIORFILTER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    pendingQualityAppraisalsErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_QUEUE: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };

        case HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_QUEUE_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };

        case HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_JUNIORFILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_JUNIORFILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };
        
        case HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_SENIORFILTER: 
            return { ...state, hsePendingQualityAppraisalsArticles: action.payload };
        
        case HSE_PENDING_QUALITY_APPRAISAL_ARTICLE_ASSIGN_SENIORFILTER_ERROR: 
            return { ...state, hsePendingQualityAppraisalsErrorMessage: 'Error listing pending quality appraisal articles' };
        default:
            return state;
            
    }

}
