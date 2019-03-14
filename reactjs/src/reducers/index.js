import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

import HSEArticleReducer from './HSEArticleReducer';
import HSEPendingEligibilityFiltersArticleQueueReducer from './HSEPendingEligibilityFiltersArticleQueueReducer';
import HSEPendingEligibilityFiltersBatchfileQueueReducer from './HSEPendingEligibilityFiltersBatchfileQueueReducer';

import HSEAssignedEligibilityFiltersArticleQueueReducer from './HSEAssignedEligibilityFiltersArticleReducer';

import SSEArticleReducer from './SSEArticleReducer';
import SSEPendingEligibilityFiltersArticleQueueReducer from './SSEPendingEligibilityFiltersArticleQueueReducer';
import SSEPendingEligibilityFiltersBatchfileQueueReducer from './SSEPendingEligibilityFiltersBatchfileQueueReducer';

import SSEAssignedEligibilityFiltersArticleQueueReducer from './SSEAssignedEligibilityFiltersArticleReducer';

export default combineReducers({
    hsePendingEligibilityFiltersArticleQueue: HSEPendingEligibilityFiltersArticleQueueReducer,
    hsePendingEligibilityFiltersBatchfileQueue: HSEPendingEligibilityFiltersBatchfileQueueReducer,
    hseAssignedEligibilityFiltersArticleQueue: HSEAssignedEligibilityFiltersArticleQueueReducer,
    hse: HSEArticleReducer,
    ssePendingEligibilityFiltersArticleQueue: SSEPendingEligibilityFiltersArticleQueueReducer,
    ssePendingEligibilityFiltersBatchfileQueue: SSEPendingEligibilityFiltersBatchfileQueueReducer,
    sseAssignedEligibilityFiltersArticleQueue: SSEAssignedEligibilityFiltersArticleQueueReducer,
    sse: SSEArticleReducer,
    form: formReducer,
    auth: authReducer
});