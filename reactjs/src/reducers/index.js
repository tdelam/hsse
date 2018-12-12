import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

import HSEArticleReducer from './HSEArticleReducer';
import HSEPendingEligibilityFiltersArticleQueueReducer from './HSEPendingEligibilityFiltersArticleQueueReducer';
import HSEPendingEligibilityFiltersBatchfileQueueReducer from './HSEPendingEligibilityFiltersBatchfileQueueReducer';

import HSEAssignedEligibilityFiltersArticleQueueReducer from './HSEAssignedEligibilityFiltersArticleReducer';

export default combineReducers({
    hsePendingEligibilityFiltersArticleQueue: HSEPendingEligibilityFiltersArticleQueueReducer,
    hsePendingEligibilityFiltersBatchfileQueue: HSEPendingEligibilityFiltersBatchfileQueueReducer,
    hseAssignedEligibilityFiltersArticleQueue: HSEAssignedEligibilityFiltersArticleQueueReducer,
    hse: HSEArticleReducer,
    form: formReducer,
    auth: authReducer
});