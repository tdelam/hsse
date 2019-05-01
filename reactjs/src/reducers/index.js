import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

import HSEArticleReducer from './HSEArticleReducer';

import HSEPendingEligibilityFiltersArticleQueueReducer from './HSEPendingEligibilityFiltersArticleQueueReducer';
import HSEPendingEligibilityFiltersBatchfileQueueReducer from './HSEPendingEligibilityFiltersBatchfileQueueReducer';

import HSEAssignedEligibilityFiltersArticleQueueReducer from './HSEAssignedEligibilityFiltersArticleReducer';

import HSEPendingQualityAppraisalsArticleQueueReducer from './HSEPendingQualityAppraisalsArticleQueueReducer';
import HSEPendingQualityAppraisalsBatchfileQueueReducer from './HSEPendingQualityAppraisalsBatchfileQueueReducer';

import HSEAssignedQualityAppraisalsArticleQueueReducer from './HSEAssignedQualityAppraisalsArticleReducer';

import HSEPendingLinkingStudiesArticleQueueReducer from './HSEPendingLinkingStudiesArticleQueueReducer';
import HSEPendingLinkingStudiesBatchfileQueueReducer from './HSEPendingLinkingStudiesBatchfileQueueReducer';

import HSEAssignedLinkingStudiesArticleQueueReducer from './HSEAssignedLinkingStudiesArticleReducer';

import HSEPendingPresentationDetailsArticleQueueReducer from './HSEPendingPresentationDetailsArticleQueueReducer';
import HSEPendingPresentationDetailsBatchfileQueueReducer from './HSEPendingPresentationDetailsBatchfileQueueReducer';

import HSEAssignedPresentationDetailsArticleQueueReducer from './HSEAssignedPresentationDetailsArticleReducer';

import SSEArticleReducer from './SSEArticleReducer';
import SSEPendingEligibilityFiltersArticleQueueReducer from './SSEPendingEligibilityFiltersArticleQueueReducer';
import SSEPendingEligibilityFiltersBatchfileQueueReducer from './SSEPendingEligibilityFiltersBatchfileQueueReducer';

import SSEAssignedEligibilityFiltersArticleQueueReducer from './SSEAssignedEligibilityFiltersArticleReducer';

import SSEPendingQualityAppraisalsArticleQueueReducer from './SSEPendingQualityAppraisalsArticleQueueReducer';
import SSEPendingQualityAppraisalsBatchfileQueueReducer from './SSEPendingQualityAppraisalsBatchfileQueueReducer';

import SSEAssignedQualityAppraisalsArticleQueueReducer from './SSEAssignedQualityAppraisalsArticleReducer';

import SSEPendingLinkingStudiesArticleQueueReducer from './SSEPendingLinkingStudiesArticleQueueReducer';
import SSEPendingLinkingStudiesBatchfileQueueReducer from './SSEPendingLinkingStudiesBatchfileQueueReducer';

import SSEAssignedLinkingStudiesArticleQueueReducer from './SSEAssignedLinkingStudiesArticleReducer';

import SSEPendingPresentationDetailsArticleQueueReducer from './SSEPendingPresentationDetailsArticleQueueReducer';
import SSEPendingPresentationDetailsBatchfileQueueReducer from './SSEPendingPresentationDetailsBatchfileQueueReducer';

import SSEAssignedPresentationDetailsArticleQueueReducer from './SSEAssignedPresentationDetailsArticleReducer';


export default combineReducers({
    hsePendingEligibilityFiltersArticleQueue: HSEPendingEligibilityFiltersArticleQueueReducer,
    hsePendingEligibilityFiltersBatchfileQueue: HSEPendingEligibilityFiltersBatchfileQueueReducer,
    
    hsePendingQualityAppraisalsArticleQueue: HSEPendingQualityAppraisalsArticleQueueReducer,
    hsePendingQualityAppraisalsBatchfileQueue: HSEPendingQualityAppraisalsBatchfileQueueReducer,
    
    hsePendingLinkingStudiesArticleQueue: HSEPendingLinkingStudiesArticleQueueReducer,
    hsePendingLinkingStudiesBatchfileQueue: HSEPendingLinkingStudiesBatchfileQueueReducer,

    hsePendingPresentationDetailsArticleQueue: HSEPendingPresentationDetailsArticleQueueReducer,
    hsePendingPresentationDetailsBatchfileQueue: HSEPendingPresentationDetailsBatchfileQueueReducer,
    
    hseAssignedEligibilityFiltersArticleQueue: HSEAssignedEligibilityFiltersArticleQueueReducer,
    hseAssignedQualityAppraisalsArticleQueue: HSEAssignedQualityAppraisalsArticleQueueReducer,
    hseAssignedLinkingStudiesArticleQueue: HSEAssignedLinkingStudiesArticleQueueReducer,
    hseAssignedPresentationDetailsArticleQueue: HSEAssignedPresentationDetailsArticleQueueReducer,

    hse: HSEArticleReducer,

    ssePendingEligibilityFiltersArticleQueue: SSEPendingEligibilityFiltersArticleQueueReducer,
    ssePendingEligibilityFiltersBatchfileQueue: SSEPendingEligibilityFiltersBatchfileQueueReducer,

    sseAssignedEligibilityFiltersArticleQueue: SSEAssignedEligibilityFiltersArticleQueueReducer,
  
    ssePendingQualityAppraisalsArticleQueue: SSEPendingQualityAppraisalsArticleQueueReducer,
    ssePendingQualityAppraisalsBatchfileQueue: SSEPendingQualityAppraisalsBatchfileQueueReducer,
  
    sseAssignedQualityAppraisalsArticleQueue: SSEAssignedQualityAppraisalsArticleQueueReducer,

    ssePendingLinkingStudiesArticleQueue: SSEPendingLinkingStudiesArticleQueueReducer,
    ssePendingLinkingStudiesBatchfileQueue: SSEPendingLinkingStudiesBatchfileQueueReducer,
  
    sseAssignedLinkingStudiesArticleQueue: SSEAssignedLinkingStudiesArticleQueueReducer,

    ssePendingPresentationDetailsArticleQueue: SSEPendingPresentationDetailsArticleQueueReducer,
    ssePendingPresentationDetailsBatchfileQueue: SSEPendingPresentationDetailsBatchfileQueueReducer,
  
    sseAssignedPresentationDetailsArticleQueue: SSEAssignedPresentationDetailsArticleQueueReducer,

    sse: SSEArticleReducer,
    form: formReducer,
    auth: authReducer
});