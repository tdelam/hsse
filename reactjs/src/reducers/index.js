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




import SSEArticleReducer from './SSEArticleReducer';
import SSEPendingEligibilityFiltersArticleQueueReducer from './SSEPendingEligibilityFiltersArticleQueueReducer';
import SSEPendingEligibilityFiltersBatchfileQueueReducer from './SSEPendingEligibilityFiltersBatchfileQueueReducer';

import SSEAssignedEligibilityFiltersArticleQueueReducer from './SSEAssignedEligibilityFiltersArticleReducer';

import SSEPendingQualityAppraisalsArticleQueueReducer from './SSEPendingQualityAppraisalsArticleQueueReducer';
import SSEPendingQualityAppraisalsBatchfileQueueReducer from './SSEPendingQualityAppraisalsBatchfileQueueReducer';

import SSEAssignedQualityAppraisalsArticleQueueReducer from './SSEAssignedQualityAppraisalsArticleReducer';

export default combineReducers({
    hsePendingEligibilityFiltersArticleQueue: HSEPendingEligibilityFiltersArticleQueueReducer,
    hsePendingEligibilityFiltersBatchfileQueue: HSEPendingEligibilityFiltersBatchfileQueueReducer,
    hseAssignedEligibilityFiltersArticleQueue: HSEAssignedEligibilityFiltersArticleQueueReducer,
    hsePendingQualityAppraisalsArticleQueue: HSEPendingQualityAppraisalsArticleQueueReducer,
    hsePendingQualityAppraisalsBatchfileQueue: HSEPendingQualityAppraisalsBatchfileQueueReducer,
    hseAssignedQualityAppraisalsArticleQueue: HSEAssignedQualityAppraisalsArticleQueueReducer,
    hse: HSEArticleReducer,
    ssePendingEligibilityFiltersArticleQueue: SSEPendingEligibilityFiltersArticleQueueReducer,
    ssePendingEligibilityFiltersBatchfileQueue: SSEPendingEligibilityFiltersBatchfileQueueReducer,
    sseAssignedEligibilityFiltersArticleQueue: SSEAssignedEligibilityFiltersArticleQueueReducer,
    ssePendingQualityAppraisalsArticleQueue: SSEPendingQualityAppraisalsArticleQueueReducer,
    ssePendingQualityAppraisalsBatchfileQueue: SSEPendingQualityAppraisalsBatchfileQueueReducer,
    sseAssignedQualityAppraisalsArticleQueue: SSEAssignedQualityAppraisalsArticleQueueReducer,
    sse: SSEArticleReducer,
    form: formReducer,
    auth: authReducer
});